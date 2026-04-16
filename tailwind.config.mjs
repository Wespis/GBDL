/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gb-dark':       '#0D1117',
        'gb-deeper':     '#010409',
        'gb-card':       '#161B22',
        'gb-card-hover': '#21262D',
        'gb-border':     '#30363D',
        'gb-red':        '#D50A0A',
        'gb-red-dark':   '#AA0808',
        'gb-red-deeper': '#7A0606',
        'gb-navy':       '#013369',
        'gb-gold':       '#B89A4A',
        'gb-gold-light': '#D4B96A',
        'gb-text':       '#E6EDF3',
        'gb-muted':      '#8B949E',
      },
      fontFamily: {
        display: ['Oswald', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
