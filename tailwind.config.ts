import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #232367, #5873DD)",
        hero: "url('/assets/hero.jpg')",
        servicesHero: "url('/assets/services-hero.jpg')",
        arrow: "url('/assets/arrow.png')",
        hiw: "url('/assets/hiw.jpg')",
      },
      keyframes: {
        clockHand: {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(-360deg)" },
        },
        manBody: {
          from: { transform: "rotateX(0deg)" },
          to: { transform: "rotateX(10deg)" },
        },
        tree: {
          from: { transform: "rotateZ(10deg)" },
          to: { transform: "rotateZ(-20deg)" },
        },
        changeLight: {
          "0%": { stroke: "#cd61f8" },
          "25%": { stroke: "#6ace66" },
          "75%": { stroke: "#2995c0" },
          "100%": { stroke: "#e92949" },
        },
      },
      animation: {
        clockHand: "clockHand 5s infinite linear",
        manBody: "manBody 1s infinite ease-in-out alternate",
        tree: "tree 2s infinite ease-in-out alternate",
        changeLight: "changeLight 4s infinite linear alternate",
      },
    },
  },
  plugins: [],
};
export default config;
