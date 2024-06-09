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
                    "foreground": {
                        DEFAULT: "#fff",
                        "muted": "#666"
                    },
                    "component": {
                        "secondary": "#94aefa33"
                    }
                },
                "brand": "#004fe8",
                "alternative": "#161616",
                "neutral": {
                    "component": {
                        "secondary": "#fafafa"
                    }
                },
                "popover": {
                    DEFAULT: "#1a1a1a",
                    "foreground": "#fff"
                },
                "accent": "#666",
                "secondary": "#d8d8d8"
            },
            keyframes: {
                fadeIn: {
                    '0%': {transform: 'scale(0.95)', opacity: 0},
                    '100%': {transform: 'scale(1)', opacity: 1},
                },
                fadeOut: {
                    '0%': {transform: 'scale(1)', opacity: 1},
                    '100%': {transform: 'scale(0.95)', opacity: 0},
                },
            },
            animation: {
                'fade-in': 'fadeIn 300ms both',
                'fade-out': 'fadeOut 300ms both',
            }
        },
    },
    plugins: [],
};
export default config;
