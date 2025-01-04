import { defineConfig } from 'astro/config'

import icon from "astro-icon"
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://styria.it',
    integrations: [icon(), tailwind(), react()],
});