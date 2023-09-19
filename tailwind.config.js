/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,cljs}"],
  theme: {
    extend: {},
  },
  /** N.B. DaisyUI (?light?) theme breaks styling in portfolio*/
  plugins: [require("daisyui")],
  // daisyui: { themes: ["dark"]}
}
