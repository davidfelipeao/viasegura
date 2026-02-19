import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import react from '@astrojs/react'; // Si usas react
import cloudflare from '@astrojs/cloudflare';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://viasegura.co',
  output: 'static',
  adapter: cloudflare(),

  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': ['template', 'gallery', 'approval', 'document', 'advertising', 'currency-exchange', 'business-contact', 'database'],
      },
    }),
    mdx(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    compress({
      CSS: true,
      HTML: false,
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    react(),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
