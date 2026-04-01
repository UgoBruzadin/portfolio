/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neural: {
          50:  '#edfcf9',
          100: '#d2f8f0',
          200: '#a9efe3',
          300: '#6fe0d1',
          400: '#38c8b8',
          500: '#1bab9e',
          600: '#128881',
          700: '#136d69',
          800: '#145755',
          900: '#154947',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
