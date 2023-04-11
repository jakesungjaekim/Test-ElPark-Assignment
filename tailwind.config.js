/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
  	"./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        'Pretendard': ['Pretendard', 'sans-serif'],
        'Pretendard-Black': ['Pretendard-Black', 'sans-serif'],
        'Pretendard-Bold': ['Pretendard-Bold', 'sans-serif'],
        'Pretendard-ExtraBold': ['Pretendard-ExtraBold', 'sans-serif'],
        'Pretendard-ExtraLight': ['Pretendard-ExtraLight', 'sans-serif'],
        'Pretendard-Medium': ['Pretendard-Medium', 'sans-serif'],
        'Pretendard-Regular': ['Pretendard-Regular', 'sans-serif'],
        'Pretendard-SemiBold': ['Pretendard-SemiBold', 'sans-serif'],
        'Pretendard-Thin': ['Pretendard-Thin', 'sans-serif'],
        'Pretendard-Variable': ['Pretendard-Variable', 'sans-serif'],
      },
  },
  plugins: [],
  }
}