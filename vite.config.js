import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // injectRegister: 'auto',
            manifest: {
                name: 'Out of Water: Lista de Compras',
                short_name: 'Lista de Compras',
                start_url: '/',
                scope: '/',
                orientation: 'portrait',
                display: 'standalone',
                description:
                    'Crea una lista de compras y edita la con Out of Water | Lista iconos creados por Aficons studio - Flaticon https://www.flaticon.es/iconos-gratis/lista',
                theme_color: '#dbe9f6',
                background_color: '#dbe9f6',
            },
        }),
    ],
    resolve: {
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
    build: {
        target: 'esnext',
    },
})
