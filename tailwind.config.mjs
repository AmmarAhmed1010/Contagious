/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gwendolyn: ['Gwendolyn', 'cursive'], // Add the custom font
      },
      fontSize: {
        'custom-xl': '121.42px', // Add the custom font size
      },
      lineHeight: {
        'custom-line': '157.84px', // Add the custom line height
      },
    },
  },
  plugins: [],
};
