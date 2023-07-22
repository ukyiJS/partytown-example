import { partytownVite } from '@builder.io/partytown/utils';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    partytownVite({
      dest: fileURLToPath(new URL('./dist/~parttown', import.meta.url)),
    }),
  ],
});
