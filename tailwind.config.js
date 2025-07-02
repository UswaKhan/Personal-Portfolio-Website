module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      
      screens: {
        'xl1400': '1400px',
        'lg1320': '1000px',
      },

      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
         sarabun: ['Sarabun', 'sans-serif'],
         prompt: ['"Prompt"', 'sans-serif'],
      },
      colors: {
        'light-green': '#c9f31d',
        'nav-border': '#343a40',
        'pra': '#999999',
        'icons': '#141410',
        'btn': 'rgb(29, 29, 29)',
        'back': '#1d1d1d',
        'c-border': 'rgb(38, 37, 37)',
        'arrow': '#1d1d1d',
        'border1': '#212529',
      },
      animation: {
        slide: 'slide 15s linear infinite',
         marqueeRight:'slide 15s linear infinite',
        marqueeLeft: 'marqueeLeft 15s linear infinite',
        fillUnfill: 'fillUnfill 3s ease-in-out infinite',
        'marquee-right': 'slide 15s linear infinite',
         wiggle: 'wiggle 2s ease-in-out infinite',
         'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
         marqueeLeft: {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
        marqueeRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100%)' },
      },
        fillUnfill: {
          '0%, 100%': {
            '--webkit-text-fill-color': 'transparent',
            'background-size': '0% 100%',
          },
          '50%': {
            '--webkit-text-fill-color': '#c9f31d',
            'background-size': '100% 100%',
          },
        },
         wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        
      },
    },
  },
  plugins: [],
};
