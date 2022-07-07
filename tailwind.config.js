const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                rubik: ["Rubik Mono One", "sans-serif"],
            },
        },
    },

    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#ef8474",
                },
            },
        ],
    },

    plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
