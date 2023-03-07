import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

console.log(import.meta);


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@components": path.resolve(__dirname, "src/components"),
      "@router": path.resolve(__dirname, "src/router")
<<<<<<< HEAD
    }
  },
  server: {
    port: 3000,
    open: '',
    proxy: {
      "^/api": {
        target: `http://www.omniverse.top`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,""),
      }
=======
>>>>>>> e18d150e851f49d4b77174c0c79b632a4b589137
    }
  },
  // define: {
  //   'process.env': {
  //     APP_NAME: 'REACT_TYPESCRIPT',
  //     BASE_URL: '/api',
  //     SERVER_HOST: 'http://www.omniverse.top',
  //     SERVER_PORT: '80'
  //   }
  // },
  plugins: [react()],
})
