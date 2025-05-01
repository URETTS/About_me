import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' }, // Значение должно быть строкой
          '100%': { opacity: '1' }, // Значение должно быть строкой
        },
      },
    },
  },
  plugins: [],
}

export default config
