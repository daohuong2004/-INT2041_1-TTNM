import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      max: { max: '99999px' },
      xxxl: { max: '2999px' },
      xxl: { max: '1919px' },
      xl: { max: '1399px' },
      lg: { max: '1199px' },
      md: { max: '991px' },
      sm: { max: '767px' },
      xs: { max: '575px' },
      xxs: { max: '479px' },
      tn: { max: '383px' },
      'xxxl-max': { min: '3000px', max: '99999px' },
      'xxl-max': { min: '1920px', max: '99999px' },
      'xxl-xxxl': { min: '1920px', max: '2999px' },
      'xl-max': { min: '1400px', max: '99999px' },
      'xl-xxxl': { min: '1400px', max: '2999px' },
      'xl-xxl': { min: '1400px', max: '1919px' },
      'lg-max': { min: '1200px', max: '99999px' },
      'lg-xxxl': { min: '1200px', max: '2999px' },
      'lg-xxl': { min: '1200px', max: '1919px' },
      'lg-xl': { min: '1200px', max: '1399px' },
      'md-max': { min: '992px', max: '99999px' },
      'md-xxxl': { min: '992px', max: '2999px' },
      'md-xxl': { min: '992px', max: '1919px' },
      'md-xl': { min: '992px', max: '1399px' },
      'md-lg': { min: '992px', max: '1199px' },
      'sm-max': { min: '768px', max: '99999px' },
      'sm-xxxl': { min: '768px', max: '2999px' },
      'sm-xxl': { min: '768px', max: '1919px' },
      'sm-xl': { min: '768px', max: '1399px' },
      'sm-lg': { min: '768px', max: '1199px' },
      'sm-md': { min: '768px', max: '991px' },
      'xs-max': { min: '576px', max: '99999px' },
      'xs-xxxl': { min: '576px', max: '2999px' },
      'xs-xxl': { min: '576px', max: '1919px' },
      'xs-xl': { min: '576px', max: '1399px' },
      'xs-lg': { min: '576px', max: '1199px' },
      'xs-md': { min: '576px', max: '991px' },
      'xs-sm': { min: '576px', max: '767px' },
      'xxs-max': { min: '480px', max: '99999px' },
      'xxs-xxxl': { min: '480px', max: '2999px' },
      'xxs-xxl': { min: '480px', max: '1919px' },
      'xxs-xl': { min: '480px', max: '1399px' },
      'xxs-lg': { min: '480px', max: '1199px' },
      'xxs-md': { min: '480px', max: '991px' },
      'xxs-sm': { min: '480px', max: '767px' },
      'xxs-xs': { min: '480px', max: '575px' },
      'tn-max': { min: '384px', max: '99999px' },
      'tn-xxxl': { min: '384px', max: '2999px' },
      'tn-xxl': { min: '384px', max: '1919px' },
      'tn-xl': { min: '384px', max: '1399px' },
      'tn-lg': { min: '384px', max: '1199px' },
      'tn-md': { min: '384px', max: '991px' },
      'tn-sm': { min: '384px', max: '767px' },
      'tn-xs': { min: '384px', max: '575px' },
      'tn-xxs': { min: '384px', max: '479px' },
    },
    fontFamily: {
      PlusJakartaSans: ['"Plus Jakarta Sans"', 'Helvetica', 'Arial', 'serif'],
      Inter: ['Inter', 'Helvetica', 'Arial', 'serif'],
    },
  },
};
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};

export default config;