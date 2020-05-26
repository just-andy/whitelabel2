// tailwind.config.js
const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': "18em",
        '80': "20em"
      }
    },
    fontFamily: {
      display: ['Anton', 'sans-serif'],
      body: ['Anton', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      "primary-100": "#F0FFF4",
      "primary-300": "#9AE6B4",
      "primary-500": "#111111",
      "primary-700": "#276749",
      "primary-900": "#22543D",
      "secondary-100": "#E6FFFA",
      "secondary-300": "#81E6D9",
      "secondary-500": "#38B2AC",
      "secondary-700": "#2C7A7B",
      "secondary-900": "#234E52",
      "accent-100": "#FFFAF0",
      "accent-300": "#F8D38D",
      "accent-500": "#ED8936",
      "accent-700": "#C05621",
      "accent-900": "#7B341E",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    tableLayout: false,
  },
}