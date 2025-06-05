const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['animate-sway', 'animate-pulseLine'],
  theme: {
    extend: {
      fontFamily: {
        // 全体の本文用フォント（日本語含む）
        sans: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        noto: ['"Noto Sans JP"', ...defaultTheme.fontFamily.sans],
        // ロゴ・タイトル用装飾フォント
        flowers: ['"Send Flowers"', 'cursive'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseLine: {
          '0%': { backgroundColor: 'rgba(147,197,253,0.2)' },
          '50%': { backgroundColor: 'rgba(147,197,253,0.7)' },
          '100%': { backgroundColor: 'rgba(147,197,253,0.2)' },
        },
        glowLine: {
          '0%, 100%': {
            boxShadow: '0 0 2px #3b82f6',
            opacity: '0.7',
          },
          '50%': {
            boxShadow: '0 0 8px #3b82f6',
            opacity: '1',
          },
        },
        glowText: {
          '0%, 100%': {
            textShadow:
              '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.7)',
          },
          '50%': {
            textShadow:
              '0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.9)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out both',
        sway: 'sway 2.5s ease-in-out infinite',
        float: 'float 3.5s ease-in-out infinite',
        pulseLine: 'pulseLine 2s ease-in-out infinite',
        glowLine: 'glowLine 2s ease-in-out infinite',
        glowText: 'glowText 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
