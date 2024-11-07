// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,mdx,md}",      // Inclui arquivos Markdown e MDX na pasta `app`
//     "./app/components/**/*.{js,jsx}", // Inclui componentes personalizados
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

    },
  },
  plugins: [],
};
export default config;
