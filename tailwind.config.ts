import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          foreground: "var(--accent-foreground)",
        },
        tint: {
          DEFAULT: "var(--tint)",
          foreground: "var(--tint-foreground)",
        },
        dark: {
          DEFAULT: "var(--dark)",
          foreground: "var(--dark-foreground)",
        },
        ink: "var(--ink)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        success: "var(--success)",
        danger: "var(--danger)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      fontFamily: {
        heading: ["var(--font-montreal)", "var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 2px 12px 0 rgba(15, 23, 42, 0.06)",
        "card-hover": "0 10px 25px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.05)",
        floating: "0 20px 40px -15px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
