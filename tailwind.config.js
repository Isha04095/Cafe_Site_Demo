module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Coffee Brown
        primary: {
          DEFAULT: "#8B4513", // coffee-brown
          50: "#F7F3F0", // coffee-brown-50
          100: "#EDE4DB", // coffee-brown-100
          200: "#D9C4B0", // coffee-brown-200
          300: "#C5A485", // coffee-brown-300
          400: "#B1845A", // coffee-brown-400
          500: "#8B4513", // coffee-brown-500
          600: "#7A3D11", // coffee-brown-600
          700: "#69350F", // coffee-brown-700
          800: "#582D0D", // coffee-brown-800
          900: "#47250B", // coffee-brown-900
        },
        // Secondary Colors - Warm Tan
        secondary: {
          DEFAULT: "#D2B48C", // warm-tan
          50: "#FAF8F5", // warm-tan-50
          100: "#F4F0EA", // warm-tan-100
          200: "#E9DDD0", // warm-tan-200
          300: "#DECAB6", // warm-tan-300
          400: "#D2B48C", // warm-tan-400
          500: "#C7A97D", // warm-tan-500
          600: "#B89B6E", // warm-tan-600
          700: "#A98D5F", // warm-tan-700
          800: "#9A7F50", // warm-tan-800
          900: "#8B7141", // warm-tan-900
        },
        // Accent Colors - Golden Rod
        accent: {
          DEFAULT: "#DAA520", // golden-rod
          50: "#FDF9F0", // golden-rod-50
          100: "#FAF2E0", // golden-rod-100
          200: "#F5E5C1", // golden-rod-200
          300: "#F0D8A2", // golden-rod-300
          400: "#EBCB83", // golden-rod-400
          500: "#DAA520", // golden-rod-500
          600: "#C4941D", // golden-rod-600
          700: "#AE831A", // golden-rod-700
          800: "#987217", // golden-rod-800
          900: "#826114", // golden-rod-900
        },
        // Background Colors
        background: "#FEFEFE", // soft-white
        surface: "#F5F5DC", // beige
        // Text Colors
        text: {
          primary: "#2F2F2F", // charcoal
          secondary: "#6B6B6B", // medium-gray
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0F8F0", // forest-green-50
          100: "#E0F2E0", // forest-green-100
          200: "#C1E5C1", // forest-green-200
          300: "#A2D8A2", // forest-green-300
          400: "#83CB83", // forest-green-400
          500: "#228B22", // forest-green-500
          600: "#1F7D1F", // forest-green-600
          700: "#1C6F1C", // forest-green-700
          800: "#196119", // forest-green-800
          900: "#165316", // forest-green-900
        },
        warning: {
          DEFAULT: "#FF8C00", // warm-orange
          50: "#FFF7F0", // warm-orange-50
          100: "#FFEFE0", // warm-orange-100
          200: "#FFDFC1", // warm-orange-200
          300: "#FFCFA2", // warm-orange-300
          400: "#FFBF83", // warm-orange-400
          500: "#FF8C00", // warm-orange-500
          600: "#E67E00", // warm-orange-600
          700: "#CC7000", // warm-orange-700
          800: "#B36200", // warm-orange-800
          900: "#995400", // warm-orange-900
        },
        error: {
          DEFAULT: "#CD5C5C", // indian-red
          50: "#FBF5F5", // indian-red-50
          100: "#F7EAEA", // indian-red-100
          200: "#EFD5D5", // indian-red-200
          300: "#E7C0C0", // indian-red-300
          400: "#DFABAB", // indian-red-400
          500: "#CD5C5C", // indian-red-500
          600: "#B95353", // indian-red-600
          700: "#A54A4A", // indian-red-700
          800: "#914141", // indian-red-800
          900: "#7D3838", // indian-red-900
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(139, 69, 19, 0.1)',
        'warm-lg': '0 2px 12px rgba(139, 69, 19, 0.08)',
        'warm-xl': '0 8px 32px rgba(139, 69, 19, 0.15)',
        'card': '0 2px 12px rgba(139, 69, 19, 0.08)',
        'modal': '0 8px 32px rgba(139, 69, 19, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.backdrop-blur-warm': {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(254, 254, 254, 0.8)',
        },
        '.gradient-warm': {
          background: 'linear-gradient(135deg, #8B4513 0%, #DAA520 100%)',
        },
        '.gradient-soft': {
          background: 'linear-gradient(135deg, #FEFEFE 0%, #F5F5DC 100%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}