import type { Config } from "tailwindcss";

const config: Config = {
  content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./data/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1b1b1d",
        "base-deep": "#0d1117",
        panel: "#1a2233",
        panel2: "#233046",
        border: "#3b3a3a",
        accent: "#00c7fe",
        success: "#3ddc97",
        danger: "#ff0051",
        attention: "#ffbb00",
        muted: "#a0a7b5",
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "hero-home":
          "linear-gradient(125deg, #000000 0%, #1b1b1d 53%, #11244e 100%)",
        "case-cinemex": "linear-gradient(180deg, #680021 0%, #4a0d0e 52%, #000000 100%)",
        "case-cinemex-bright": "linear-gradient(180deg, #a80035 0%, #4a0d0e 52%, #000000 100%)",
        "case-uber-eats": "linear-gradient(180deg, #004739 0%, #162329 52%, #000000 100%)",
        "case-uber-eats-bright": "linear-gradient(180deg, #3ec060 0%, #162329 52%, #000000 100%)",
        "case-galactic-coffee": "linear-gradient(180deg, #3c006b 0%, #010028 52%, #000000 100%)",
        "case-galactic-coffee-bright": "linear-gradient(180deg, #7c00e9 0%, #010028 52%, #000000 100%)",
        "hero-cinemex": "linear-gradient(100deg, #a80035 0%, #4a0d0e 109%)",
        "hero-uber-eats": "linear-gradient(100deg, #3ec060 0%, #162329 109%)",
        "hero-galactic-coffee": "linear-gradient(100deg, #7c00e9 0%, #3c006b 109%)",
      },
      keyframes: {
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(1.2deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(-2deg)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2.5deg)" },
        },
      },
      animation: {
        "float-1": "float-1 6.5s ease-in-out infinite",
        "float-2": "float-2 5.5s ease-in-out infinite",
        "float-3": "float-3 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
