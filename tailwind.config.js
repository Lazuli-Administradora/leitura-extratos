/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#153959",
          secondary: "#447FC5",
          accent: "#3F64FF",
          neutral: "#191a3e",
          "base-100": "#153959",
          info: "#3194f6",
          success: "#5ec992",
          warning: "#f7e02b",
          error: "#e60400",
        },
      },
    ],
  },
};
