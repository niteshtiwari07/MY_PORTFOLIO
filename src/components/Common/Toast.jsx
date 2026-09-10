import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const isSuccess = type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 shadow-2xl backdrop-blur-md text-sm text-slate-100 max-w-md">
      {isSuccess ? (
        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
      )}
      <div className="flex-1 font-medium">{message}</div>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
