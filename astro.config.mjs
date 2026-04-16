import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Change `base` to your GitHub repo name if deploying to a project page,
// e.g. base: '/gridiron-bloodlines-dynasties'
// Leave as '/' if using a custom domain or GitHub user/org page.
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  site: 'https://gridiron-bloodlines.netlify.app',
  base: '/',
});
