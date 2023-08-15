tailwind.config = {
  content: ['../*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto',
        'josefin': 'Josefin Sans'
      },
      textColor: {
        green: {
          primary: '#0AD11B',
          secondary: '#88EB90',
          tertiary: '#089E14',
          background: '#04520B',
        }
      },
      backgroundColor: {
        'background': '#212429',
        'secundary': '#f1fff2',
        green: {
          primary: '#0AD11B',
          secondary: '#88EB90',
          tertiary: '#089E14',
          background: '#04520B',
        },
      },
      borderColor: {
        'background': "#212429",
        'green-background': '#04520B',
        'green-primary': '#0AD11B',
        'green-secondary': '#88EB90',
        'green-tertiary': '#089E14'
      }
    },
  },
  plugins: [],
}