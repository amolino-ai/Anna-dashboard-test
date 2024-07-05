/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        mainBackground: '#263146',
        textColor: '#DAF3FF',
        borderColor: '#B5E7FF',
        borderGrayColor: '#425160',
        activeBtnColor: '#0C71A5',
      },
    },
  },
  plugins: [],
};
