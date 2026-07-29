import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './pruebas',
  use: {
    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },
  reporter: [['html', { open: 'never' }]],
});