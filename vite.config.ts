import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: '',
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
