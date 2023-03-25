/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    environmentMatchGlobs: [
      // all tests with jsx or tsx extension will run in jsdom
      ['**/*.{test,spec}.{jsx,tsx}', 'jsdom'],
    ],
    setupFiles: ['./src/setupTest.ts'],
    globals: true,
  },
});
