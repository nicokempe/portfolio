import type { Config } from 'tailwindcss'

export default <Partial<Config>>{}

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Lato', 'sans-serif']
            },
            colors: {
                'primary': {
                    100: '#89C2D9',
                    200: '#61A5C2',
                    300: '#468FAF',
                    400: '#2C7DA0',
                    500: '#2A6F97',
                    600: '#014F86',
                    700: '#01497C',
                    800: '#013A63',
                    900: '#012A4A',
                },
                'neutral': {
                    100: '#F8F9FA',
                    200: '#E9ECEF',
                    300: '#DEE2E6',
                    400: '#CED4DA',
                    500: '#ADB5BD',
                    600: '#6C757D',
                    700: '#495057',
                    800: '#343A40',
                    850: '#2C3237',
                    900: '#212529',
                    950: '#181B1E'
                }

            },
        },
    },
    darkMode: 'class',
}