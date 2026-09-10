/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#030712',
          surface: '#0B0F19',
          card: '#0F172A',
          cardHover: '#1E293B',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        cyan: {
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#06B6D4',
          600: '#0891B2',
          950: '#083344',
        },
        accent: {
          primary: '#06B6D4',
          secondary: '#3B82F6',
          purple: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.2) 0%, rgba(3, 7, 18, 0) 75%)',
        'card-gradient': 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(11, 15, 25, 0.9) 100%)',
      },
    },
  },
  plugins: [],
}
