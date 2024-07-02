import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      'heading-XL': ['64px', { 
        lineHeight: '1.1em', 
        fontWeight: '600'
      }],
      'heading-L': ['48px', { 
        lineHeight: '1.1em', 
        fontWeight: '600'
      }],
      'heading-M': ['24px', { 
        lineHeight: '1.1em', 
        fontWeight: '600'
      }],
      'heading-S': ['20px', { 
        lineHeight: '1.1em', 
        fontWeight: '600'
      }],
      'body-M': ['16px', '1.5rem'],
      'body-M-bold': ['16px', { 
        lineHeight: '1.5', 
        fontWeight: '600'
      }],
      'body-S': ['14px', '1.5'],
    },
    colors: {
      'blue': "#345FF6", 
      "gunmetal": "#253347",
      "dark-electric-blue": "#5E6E85",
      "white": "#FFFFFF"  
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
