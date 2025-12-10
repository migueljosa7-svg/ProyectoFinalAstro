// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react'; // ± IMPORTANTE

// https://astro.build/config
export default defineConfig({
integrations: [
react() // ± ACTIVAR REACT
],

vite: {
plugins: [tailwindcss()]
},
});