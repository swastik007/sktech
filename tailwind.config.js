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
           
            height: {
                '128': '32rem',
            },
            colors: {
                'primary': 'rgb(72, 180, 115)',
                'secondary': '#7e5bef',
                
            },
        },

    },
    plugins: [
        // ...
        flowbite.plugin(),
    ],
};