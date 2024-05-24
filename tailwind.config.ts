import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "15px",
        },
        extend: {
            backgroundImage: {
                "card": "linear-gradient(132.93deg,rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)"
            },
            colors: {
                "primary": {
                    DEFAULT: "#004fe8",
                    "foreground": "#fff",
                },
                "secondary": "#d8d8d8"
            }
        },
    },
    plugins: [],
};
export default config;
