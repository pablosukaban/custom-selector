/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#777',
                secondary: '#333',
                lightRed: 'hsl(0, 100%, 90%)',
                normalRed: 'hsl(0, 100%, 50%)',
            },
        },
    },
    plugins: [],
}