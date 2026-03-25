import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        business: {
          blue: '#1e3a8a',
          gray: '#374151',
          light: '#f3f4f6',
        }
      },
    },
  },
  plugins: [],
};
export default config;
