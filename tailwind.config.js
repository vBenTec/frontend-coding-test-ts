module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        logo: {
          'yellowish-base': '#FECF45',
          'yellowish-dark': '#BB9E3B',
          'yellowish-light': '#FFDF8B',
          'bluish-base': '#129DC4',
          'bluish-light': '#B8DFF1',
          'bluish-dark': '#0A5971',
          'redish-base': '#C72A23',
          'redish-light': '#E44524',
          'orange': '#F29A27',
          'pink': '#E75385',
        },
      },
      dropShadow: {
        'sm-center-purple': '0 0 0.1rem  purple',
        'md-center-purple': '0 0 0.3rem  purple',
      },
    },
  },
  plugins: [],
}
