/** @type {import('tailwindcss').Config} */
export const tailwindConfig = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: [
    ""
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}