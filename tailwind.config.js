import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                inter: ["Inter", 'sans-serif']
            },
            colors: {
                primary: {
                    DEFAULT: '#4f46e5', // Custom primary color
                    dark: '#3730a3',
                    light: '#a5b4fc',
                },
                gray: {
                    light: '#f9fafb',
                    DEFAULT: '#6b7280',
                    dark: '#374151',
                },
            },
        },
    },

    plugins: [forms],
});
