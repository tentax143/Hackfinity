import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'minimal-gray': '#6B7280',
        'minimal-dark': '#1F2937',
        'minimal-light': '#F9FAFB',
        'minimal-accent': '#3B82F6',
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        minimal: ['Inter', 'sans-serif'],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px)' 
          },
          '50%': { 
            transform: 'translateY(-4px)' 
          }
        },
        'slide-up': {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1'
          }
        },
        'slide-in-left': {
          '0%': { 
            transform: 'translateX(-100px) scale(0.9)', 
            opacity: '0',
            filter: 'blur(4px)'
          },
          '100%': { 
            transform: 'translateX(0) scale(1)', 
            opacity: '1',
            filter: 'blur(0px)'
          }
        },
        'slide-in-right': {
          '0%': { 
            transform: 'translateX(100px) scale(0.9)', 
            opacity: '0',
            filter: 'blur(4px)'
          },
          '100%': { 
            transform: 'translateX(0) scale(1)', 
            opacity: '1',
            filter: 'blur(0px)'
          }
        },
        'cyber-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'counter': {
          '0%': { 
            transform: 'scale(1) rotateX(0deg)',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            transform: 'scale(1.05) rotateX(180deg)',
            filter: 'hue-rotate(90deg)'
          },
          '100%': { 
            transform: 'scale(1) rotateX(360deg)',
            filter: 'hue-rotate(0deg)'
          }
        },
        'smooth-bounce': {
          '0%, 100%': {
            transform: 'translateY(0px)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(-25px)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px) scale(0.95)',
            filter: 'blur(2px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
            filter: 'blur(0px)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'float': 'float 4s ease-in-out infinite',
        'slide-up': 'slide-up 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-left': 'slide-in-left 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-in-right': 'slide-in-right 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'cyber-spin': 'cyber-spin 20s linear infinite',
        'counter': 'counter 3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'smooth-bounce': 'smooth-bounce 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
