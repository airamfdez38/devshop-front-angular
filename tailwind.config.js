module.exports = {
  content: ["./src/**/*.{html,scss,ts}",],
  theme: {
    screens:{
      mobile: {'min': '320px', 'max': '767px'},
      tablet: {'min': '768px', 'max': '1023px'},
      desktop: {'min': '1024px'}
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
        'imageMobile': "url('/src/assets/img/home_image.jpg')"
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
