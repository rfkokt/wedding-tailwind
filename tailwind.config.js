const plugin = require("tailwindcss/plugin")

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                mono: ['Great Vibes, cursive;'],
                curs: ['Birthstone', "cursive"]
            },
            colors: {
                "theme-blue": "#5515ef",
                "theme-pink": "#eb589e",
                "theme-blue-dark": "#3c01ca",
                "blue": {
                    "50": "#108107100",
                    "100": "#f1f3fe",
                    "200": "#c2cbf9",
                    "300": "#8fa0f5",
                    "400": "#6078f1",
                    "500": "#04395E",
                    "600": "#1332ce",
                    "700": "#031D44",
                    "800": "#091862",
                    "900": "#040b2f"
                },
                "abu": {
                    "50": "#111111111",
                    "100": "#f7f7f7",
                    "150": "#F7F8FA",
                    "200": "#c2c2c2",
                    "300": "#8c8c8c",
                    "400": "#575757",
                    "500": "#212121",
                    "600": "#1f1f1f",
                    "700": "#1f1f1f",
                    "800": "#1c1c1c",
                    "900": "#1a1a1a",
                },
                "pinkhunt": {
                    "50": "#FCD8D4",
                    "100": "#FDF6F0",
                    "150": "#F8E2CF",
                    "200": "#F5C6AA",
                },
                "color-pallete": {
                    "50": "#1e322e",
                    "100": "#FFCCD2",
                    "150": "#C89595",
                    "200": "#ADC2A9",
                    "250": "#97a5ac",
                    "300": "#6abd87",
                    "350": "#8a96a9",
                    "400": "#365345",
                    "450": "#48596f",
                    "500": "#c48410",
                    "550": "#a45c5c",
                    "600": "#ff8282",
                    "650" : "#EEEEEE"
                },
                "blackContent": "#222222"
            },
            backgroundImage: {
                "invited": `url(/heronew.webp)`,
                // "best-resolution": `url(/best_resolution1.png)`,
                "footer": `url(/footer1.webp)`
            },
            boxShadow: {
                'theme-1': '0 0 60px -15px rgba(0, 0, 0, 0.7)',
                'theme-2': '15px 0 35px -5px rgba(0, 0, 0, 0.5)',
                'theme-3': ' -5px -28px 63px -2px rgba(0,0,0,0.57)',
                'theme-4': '8px 10px 20px -3px rgba(0,0,0,0.73);'
            },
            fontSize: {
                '10xl': '10rem',
                '16xl': '16rem',
                '17xl': '17rem',
                '18xl': '18rem',
                '19xl': '19rem',
                '20xl': '20rem',
            },
            letterSpacing: {
                'more-wide': '1rem',
            },
        },
    },
    variants: {
        extend: {
            scale: ['active', 'group-hover'],
            rotate: ['group-hover'],
            inset: ['hover', 'group-hover'],
        },
    },
    plugins: [
        plugin(function ({
                             addUtilities
                         }) {
            const utilities = {
                ".bg-hero": {
                    "background-image": "url(/hero5.webp)",
                }
            }
            addUtilities(utilities);
        }),
    ],
}
