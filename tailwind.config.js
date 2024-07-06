/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(220.55deg, #FFF6EB 0%, #DFD1C5 100%)",
        "project-gradient":
          "linear-gradient(220.55deg, #AFCCCB 0%, #616566 100%)",
      },
      colors: {
        "hero-color": "#f5efef",
        "secondary-color": "#ef4444",
        "projects-color": "#CCCCCC",
        "iphone" : "#041319",
        "brainwave" : "#171b20",
        "arlen" : "#e1e3e7",
      },

      fontSize: {
        "8.1xl": "8.1rem",
        "9.5xl": "9.5rem",
        "10xl": "10rem",
        "10.25xl": "10.25rem",
        "10.5xl": "10.5rem",
        "10.75xl": "10.75rem",
        "11xl": "11rem",
        "11.25xl": "11.25rem",
        "11.5xl": "11.5rem",
        "11.75xl": "11.75rem",
        "12xl": "12rem",
        "12.25xl": "12.25rem",
        "12.5xl": "12.5rem",
        "12.75xl": "12.75rem",
        "13xl": "13rem",
        "13.25xl": "13.25rem",
        "13.5xl": "13.5rem",
        "13.75xl": "13.75rem",
        "14xl": "14rem",
        "14.25xl": "14.25rem",
        "14.5xl": "14.5rem",
        "14.75xl": "14.75rem",
        "15xl": "15rem",
        "15.25xl": "15.25rem",
        "15.5xl": "15.5rem",
        "15.75xl": "15.75rem",
        "16xl": "16rem",
        "16.25xl": "16.25rem",
        "16.5xl": "16.5rem",
        "16.75xl": "16.75rem",
        "17xl": "17rem",
        "17.25xl": "17.25rem",
        "17.5xl": "17.5rem",
        "17.75xl": "17.75rem",
        "18xl": "18rem",
        "18.25xl": "18.25rem",
        "18.5xl": "18.5rem",
        "18.75xl": "18.75rem",
        "19xl": "19rem",
        "19.25xl": "19.25rem",
        "19.5xl": "19.5rem",
        "19.75xl": "19.75rem",
        "20xl": "20rem",
      },

      spacing: {
        3.5: "0.875rem", // 14px
        7.5: "1.875rem", // 30px
        17.5: "4.375rem", // 70px
      },
      screens: {
        "2k": "2048px",
      },
    },
  },
  plugins: [],
};
