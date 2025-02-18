import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGrey: "var(--lightGrey)",
        lightDark: "var(--lightDark)",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)"],
      },
      backgroundImage: {
        my_bg_image: "url('../public/hero_bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
