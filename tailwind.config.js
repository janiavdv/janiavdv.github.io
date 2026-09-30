/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,css,md,mdx}"],
    theme: {
        extend: {
            colors: {
                // Fixed dark ink for text on secondary/accent fills. Both fills stay
                // light/pastel in cupcake AND dracula, so this one value (not a
                // per-theme token) is what clears WCAG AA contrast in both themes.
                ink: "#291334",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "dracula",
        ],
    },
};