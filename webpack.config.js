const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    WorkboxWebpackPlugin = require('workbox-webpack-plugin'),
    WebpackPwaManifest = require('webpack-pwa-manifest');
// HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
    target: ['web', 'es2017'],
    output: {
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(webp|jpe?g|png|svg)$/i,
                use: ['file-loader?name=assets/[hash].[ext]'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({ filename: 'main.css' }),
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
        }),
        new WebpackPwaManifest({
            filename: 'manifest.json',
            name: 'Lista de Compras',
            short_name: 'Compras',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve('src/assets/icons/list-check-solid.svg'),
                    sizes: '150x150',
                },
            ],
            start_url: '/',
            orientation: 'portrait',
            display: 'standalone',
            description: 'My awesome Progressive Web App!',
            theme_color: '#55b1b9',
            background_color: '#ffffff',
        }),
        // new HtmlCriticalWebpackPlugin({
        //     base: path.resolve(__dirname, 'dist'),
        //     src: 'index.html',
        //     dest: 'index.html',
        //     inline: true,
        //     minify: true,
        //     extract: true,
        //     width: 500,
        //     height: 800,
        //     penthouse: {
        //         blockJSRequests: false,
        //     },
        // }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    experiments: {
        topLevelAwait: true,
    },
};
