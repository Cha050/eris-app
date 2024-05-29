import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use path to resolve alias
    },
  },
  server: {
    port: 3000, // You can specify the port here
  },
});
