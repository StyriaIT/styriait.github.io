import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                bayern: {
                    'light': '#3B8FD9',
                    'medium': '#1F5AA6',
                    'dark': '#123C73',
                    'white': '#EBEFF2',
                    'eggwhite': '#BACBD9'
                }
            }
        }
    },
    plugins: [
        flowbite
    ]
}