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
        // Brand palette
        black: "#0A0A0A",
        charcoal: "#1A1A1A",
        taupe: "#3D3832",
        "warm-gray": "#8A8578",
        gold: "#C9A96E",
        bronze: "#8B6914",
        cream: "#F5F2ED",
        white: "#FFFFFF",
        "error-red": "#C45B5B",
        "success-green": "#6B8F71",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        "display-xl": ["96px", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        display: ["80px", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "heading-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        heading: ["56px", { lineHeight: "1.15" }],
        "heading-md": ["48px", { lineHeight: "1.2" }],
        "heading-sm": ["40px", { lineHeight: "1.25" }],
        "heading-xs": ["32px", { lineHeight: "1.3" }],
        "body-lg": ["18px", { lineHeight: "1.8" }],
        body: ["16px", { lineHeight: "1.75" }],
        "body-sm": ["15px", { lineHeight: "1.7" }],
        label: ["12px", { lineHeight: "1.5", letterSpacing: "0.3em" }],
        "label-sm": ["10px", { lineHeight: "1.5", letterSpacing: "0.25em" }],
        caption: ["13px", { lineHeight: "1.6", letterSpacing: "0.05em" }],
        stat: ["72px", { lineHeight: "1.0" }],
        "stat-lg": ["96px", { lineHeight: "1.0" }],
      },
      spacing: {
        section: "150px",
        "section-lg": "200px",
        "section-sm": "100px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
        shimmer: "shimmer 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "dot-scroll": "dotScroll 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        dotScroll: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(40px)", opacity: "0" },
        },
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        luxury: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
} satisfies Config;
