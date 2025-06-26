const createNextIntlPlugin = require('next-intl/plugin');
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        config.resolve.alias['@app'] = path.resolve(__dirname, 'app');
        config.resolve.alias['@components'] = path.resolve(__dirname, 'components');
        config.resolve.alias['@lib'] = path.resolve(__dirname, 'lib');
        config.resolve.alias['@contexts'] = path.resolve(__dirname, 'contexts');
        return config;
    },

    images: {
        domains: [],
        formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
    swcMinify: true,
};

export default withNextIntl(nextConfig);