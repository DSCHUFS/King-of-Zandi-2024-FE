/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '430px', // 핸드폰 뷰
      md: '768px',
    },
    colors: {
      pointColor: "#60D68A",
      bgColor: "#242625",
      dummyColor: "#999999"
    },
    extend: {},
  },
  plugins: [],
};
