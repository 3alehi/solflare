import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#14161f"
   
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateX(0) translateY(0)' // شروع از موقعیت صفر
          },
          '50%': { 
            transform: 'translateX(-200px) translateY(200px)' // نیم‌دایره به سمت بالا و چپ
          },
        },
      }
      

      ,
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1300px'
  		},
    },
  },
  plugins: [],
} satisfies Config;
