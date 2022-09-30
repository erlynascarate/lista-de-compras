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
            filename: 'index.html',
            favicon: path.resolve('src/assets/icons/favicon.ico'),
        }),
        new MiniCssExtractPlugin({ filename: 'main.css' }),
        new WorkboxWebpackPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'service-worker.js',
        }),
        new WebpackPwaManifest({
            filename: 'manifest.json',
            name: 'Out of Water: Lista de Compras',
            short_name: 'Lista de Compras',
            icons: [
                {
                    src: path.resolve('src/assets/icons/icon.png'),
                    sizes: '512x512',
                },
                {
                    src: path.resolve('src/assets/icons/maskable_icon.png'),
                    sizes: '512x512',
                    purpose: 'maskable',
                },
                {
                    src: path.resolve(
                        'src/assets/icons/maskable_icon_x1024.png'
                    ),
                    sizes: '1024x1024',
                    purpose: 'maskable',
                },
            ],
            ios: {
                'apple-touch-icon': path.resolve(
                    __dirname,
                    'src/assets/icons/apple-touch-icon.png'
                ),
            },
            start_url: '/',
            scope: '/',
            orientation: 'portrait',
            display: 'standalone',
            description:
                'Crea una lista de compras y edita la con Out of Water | Lista iconos creados por Aficons studio - Flaticon https://www.flaticon.es/iconos-gratis/lista',
            theme_color: '#dbe9f6',
            'theme-color': '#549ad4',
            background_color: '#dbe9f6',
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
