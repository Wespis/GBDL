/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gb-dark':       '#0a0e17',
        'gb-card':       '#111827',
        'gb-card-hover': '#1f2937',
        'gb-border':     '#374151',
        'gb-red':        '#dc2626',
        'gb-red-dark':   '#991b1b',
        'gb-red-deeper': '#7f1d1d',
        'gb-gold':       '#d97706',
        'gb-gold-light': '#fbbf24',
      },
      fontFamily: {
        display: ['Oswald', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
