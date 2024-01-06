/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "430px", // 핸드폰 뷰
                md: "768px",
                lg: "1200px", // 전체 뷰
                ml: "960px", // 메인 시간 hidden
            },
            colors: {
                pointColor: "#60D68A",
                faultColor: "#D66060",
                bgColor: "#242625",
                divideColor: "#737373",
                dummyColor: "#999999",
            },
        },
    },
    plugins: [require("daisyui")],
};
