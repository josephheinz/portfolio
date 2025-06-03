// Rest of your svelte.config.js code here
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';


export default {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: "index.html", // allow dynamic routes to load
            strict: false            // suppress warnings about dynamic routes
        }),
        paths: {
            base: '/portfolio' // required for GH Pages project site
        },
        prerender: {
            entries: ['*']  // or default: true if you want full static
        }
    }
};