const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}",
        "./src/**/*.{js,jsx,ts,tsx}",
        flowbite.content(),
    ],
    theme: {

        extend: {
            fontFamily: {
                'firasans': ['Fira Sans', 'sans-serif'],
                'bubblegum': ['Bubblegum Sans', 'sans-serif']
              },
            height: {
                '128': '32rem',
            },
            colors: {
                'primary': 'rgb(31, 182, 255)',
                'secondary': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
            },
        },

    },
    plugins: [
        // ...
        flowbite.plugin(),
    ],
};