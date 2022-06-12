/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {}) => {
        config.module.rules.push({
            test: /\.scss$/,
            loader: ["style-loader", "css-loader", "sass-loader"],
        });
        return config;
    },
};

module.exports = nextConfig;
