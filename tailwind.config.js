/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bgBlue: "#404eed",
                bgHover: "#5865f2",
                bgWhite: "#f6f6f6",
                bgBlack: "#23272a",
                bgGrey: "#2c2f33",
                btnDark: "#23272a",
            },
        },
    },
    plugins: [],
};
