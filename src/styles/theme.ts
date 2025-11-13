import { type Config } from 'tailwindcss';

export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#2563EB', // Blue
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
        950: '#172554',
      },
      secondary: {
        DEFAULT: '#4F46E5', // Indigo
        50: '#EEF2FF',
        100: '#E0E7FF',
        200: '#C7D2FE',
        300: '#A5B4FC',
        400: '#818CF8',
        500: '#6366F1',
        600: '#4F46E5',
        700: '#4338CA',
        800: '#3730A3',
        900: '#312E81',
        950: '#1E1B4B',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      display: ['var(--font-cal-sans)', 'system-ui', 'sans-serif'],
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-in-out',
      'fade-in-up': 'fade-in-up 0.5s ease-out',
      'fade-out': 'fade-out 0.5s ease-in-out',
      'fade-out-down': 'fade-out-down 0.5s ease-out',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      'fade-out-down': {
        '0%': { opacity: '1', transform: 'translateY(0)' },
        '100%': { opacity: '0', transform: 'translateY(10px)' },
      },
    },
  },
} satisfies Config['theme']; 