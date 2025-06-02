import { resolve } from 'path';
const assets = resolve('src/app');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Rest of your svelte.config.js code here
import adapter from '@sveltejs/adapter-static';
import { strict } from 'assert';

const config = {
    kit: {
        adapter: adapter({
            strict: false,
            pages: 'build',
            assets: 'build',
            fallback: undefined
        }),

    }
};

export default config;