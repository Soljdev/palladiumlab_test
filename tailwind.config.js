// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Gilroy', ...defaultTheme.fontFamily.sans],
        body: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': ['64px', {
          lineHeight: '72px',
          // letterSpacing: '-0.01em',
          fontWeight: '800',
        }],
        'heading-2': ['32px', {
          lineHeight: '40px',
          // letterSpacing: '-0.01em',
          fontWeight: '800',
        }],
        'heading-3': ['24px', {
          lineHeight: '36px',
          // letterSpacing: '-0.01em',
          fontWeight: '600',
        }],
      }, 
      colors: {
        'main-red': 'rgba(235, 87, 87, 1)',
        'main-green': 'rgba(33, 150, 83, 1)',
        'main-blue': 'rgba(47, 128, 237, 1)',
        'main-purple': 'rgba(155, 81, 224, 1)',

      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
