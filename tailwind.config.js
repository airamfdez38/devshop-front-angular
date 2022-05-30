module.exports = {
  content: ["./src/**/*.{html,scss,ts}",],
  theme: {
    screens:{
      mobile: "320px",
      tablet: "768px",
      'desktop-small': '900px',
      'desktop-medium': '1200px',
      'desktop-large': '1800px'
    },
    extend: {
      colors: {
        darkPrimaryDevshop: '#085274',
        lightPrimaryDevshop: '#AFC0C5',
        darkSecondaryDevshop: '#056F66',
        lightSecondaryDevshop: '#4CF3DA',
        darkNeutralDevshop: '#444444',
        lightNeutralDevshop: '#ffffff'
      },
      backgroundImage: {
        'logo': "url('')",
        'imageDesktop': "url('')",
        'imageTablet': "url('')",
        'imageMobile': "url('')"
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica Neue', 'sans-serif']
      },
      fontSize: {
        xxs: ['0.325rem'],
        sm: ['12px'],
        sml: ['10px', '20px']
      },
      
    },
  },
  plugins: [],
}
