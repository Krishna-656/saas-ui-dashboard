module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'xs': ['12px', '16px'],
        'sm': ['13px', '18px'],
        'base': ['14px', '20px'],
        'lg': ['16px', '24px'],
        'xl': ['20px', '28px'],
        '2xl': ['24px', '32px']
      },
      spacing: {
        '4.5': '18px',
        '7.5': '30px'
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#eef2ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5'
        }
      },
      boxShadow: {
        'soft-lg': '0 10px 30px rgba(17,24,39,0.06)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '18px'
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        'shimmer': 'shimmer 1.4s linear infinite'
      }
    }
  },
  plugins: [],
};
