/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-blue": "#0A2640",
                "main-green": "#65E4A3",
            },
        },
        fontFamily: {
            manrope: ["Manrope"],
        }, 
    },
    plugins: [],
};