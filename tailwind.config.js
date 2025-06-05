// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['animate-sway', 'animate-pulseLine'], // ← 追加！
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(24px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseLine: {
          '0%': { backgroundColor: 'rgba(147,197,253,0.2)' },   // 青色っぽい淡い
          '50%': { backgroundColor: 'rgba(147,197,253,0.7)' },  // 強め
          '100%': { backgroundColor: 'rgba(147,197,253,0.2)' }, // また弱く
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out both',
        sway: 'sway 2.5s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        pulseLine: 'pulseLine 2s ease-in-out infinite', // ← 追加！
      },
    },
  },
  plugins: [],
};
