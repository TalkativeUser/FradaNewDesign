/** @type {import('tailwindcss').Config} */
export default {
  important:true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "300px",
      sm: '640px',
      md:"768px",
      lg: "1024px",
      xl: '1280px',
    },
    extend: {
      colors: {
        lightGray: "#EDEDED",
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkOrange: "#D07A51",
        darkGray: "#707070",
        darkGray2: "#515151",
        opacity: "#F6F6F6",
        lightOrange: "rgba(233,194,175,255)",
        lightGrayy: "#f2f2f2",
        blackOpacity: "rgb(12 9 7 / 83%)",
        secondColor: "#f2f2f2",
        blackColor: "#000",
        whiteColor: "#fff",
        mainColor: "#d27a51",
        black_opacity:"rgba(0,0,0,0.33)"
      },
    },
  },
  plugins: [],
};