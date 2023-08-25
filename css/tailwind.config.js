/** @type {import('tailwindcss').Config} */

/**
 * Para fazer a extensão Tailwind IntelliSense funcionar, 
 * tenho que ter esse arquivo.
 * 
 * Mas as configurações do Tailwind estão no arquivo config.js
 */

module.exports = {
    content: ['../*.{html,js}'],
    theme: {
        extend: {
            boxShadow: {
                'modal': '0px 4px 10px 0px #000'
            },
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
