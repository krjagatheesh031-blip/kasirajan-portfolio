/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Global Color System specified by User:
        // Primary forest green: #153B2B
        // Secondary botanical green: #24543B
        // Olive green: #527A49
        // Harvest gold: #B89555
        // Main cream background: #F5F1E7
        // Secondary warm background: #EAE5D8
        // White card background: #FFFFFF
        // Primary text: #26332A
        // Secondary text: #46544A
        // Muted text: #68746B
        // Border: #DDDCCF

        primaryForest: {
          DEFAULT: '#153B2B',
          dark: '#0C2319',
          light: '#1B4734',
        },
        secondaryBotanical: {
          DEFAULT: '#24543B',
          dark: '#193D2A',
          light: '#2E694A',
        },
        oliveGreen: {
          DEFAULT: '#527A49',
          dark: '#3F6038',
          light: '#68945E',
        },
        harvestGold: {
          DEFAULT: '#B89555',
          900: '#5C4722',
          800: '#7E6333',
          700: '#9E7D44',
          600: '#B89555',
          500: '#C7A76D',
          400: '#D5BC8A',
          300: '#E4D1A9',
          200: '#F0E5CC',
          100: '#F9F5EC',
        },
        mainCream: '#F5F1E7',
        secondaryWarm: '#EAE5D8',
        whiteCard: '#FFFFFF',
        primaryText: '#26332A',
        secondaryText: '#46544A',
        mutedText: '#68746B',
        borderWarm: '#DDDCCF',

        // Deep Botanical Theme aliases to ensure backwards and future compatibility
        deepForest: {
          DEFAULT: '#153B2B',
          950: '#0C2319',
          900: '#153B2B',
          800: '#1B4734',
          700: '#21543D',
          600: '#2A644A',
        },
        botanical: {
          DEFAULT: '#24543B',
          900: '#193D2A',
          800: '#24543B',
          700: '#2E694A',
          600: '#3A805B',
          500: '#47966B',
        },
        oliveSage: {
          DEFAULT: '#527A49',
          900: '#2F4829',
          800: '#3F6038',
          700: '#527A49',
          600: '#64925A',
          500: '#78AA6D',
          400: '#92BE88',
          300: '#B0D3A8',
        },
        warmSand: {
          DEFAULT: '#EAE5D8',
          900: '#464030',
          800: '#645C45',
          700: '#877D5E',
          600: '#ADA17C',
          500: '#DDDCCF',
          400: '#EAE5D8',
          300: '#F5F1E7',
        },
        softCream: {
          DEFAULT: '#F5F1E7',
          900: '#524D40',
          800: '#736B59',
          700: '#998F78',
          600: '#BEB49B',
          500: '#DDDCCF',
          400: '#EAE5D8',
          300: '#F5F1E7',
          200: '#FAF8F3',
          100: '#FDFCF9',
          50: '#FFFFFF',
        },
        charcoalGreen: {
          DEFAULT: '#26332A',
          950: '#17201A',
          900: '#26332A',
          800: '#34453A',
          700: '#46544A',
          600: '#68746B',
        },
        forest: {
          DEFAULT: '#153B2B',
          50: '#F5F1E7',
          100: '#EAE5D8',
          200: '#DDDCCF',
          300: '#92BE88',
          400: '#64925A',
          500: '#527A49',
          600: '#2E694A',
          700: '#24543B',
          800: '#1B4734',
          900: '#153B2B',
          950: '#0C2319',
        },
        cream: {
          DEFAULT: '#F5F1E7',
          50: '#FFFFFF',
          100: '#FAF8F3',
          200: '#F5F1E7',
          300: '#EAE5D8',
          400: '#DDDCCF',
          500: '#C7BB98',
          600: '#ADA17C',
          700: '#877D5E',
          800: '#645C45',
          900: '#26332A',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px -1px rgba(21, 59, 43, 0.08), 0 1px 4px -1px rgba(21, 59, 43, 0.05)',
        'premium': '0 10px 30px -4px rgba(21, 59, 43, 0.12), 0 4px 10px -2px rgba(21, 59, 43, 0.06)',
        'elevated': '0 20px 40px -8px rgba(12, 35, 25, 0.25), 0 8px 16px -4px rgba(12, 35, 25, 0.12)',
        'gold': '0 0 25px -4px rgba(184, 149, 85, 0.35)',
      }
    },
  },
  plugins: [],
}
