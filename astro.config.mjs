import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://styria.it',
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [icon(), react()],
});