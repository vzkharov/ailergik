import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // @ts-expect-error - vite types error
  plugins: [react()],
  // set mode to test
  mode: 'test',
  test: {
    name: '@ailergik/www',
    // imitate browser environment
    environment: 'jsdom',
    // the reason - a lot of files in the src/ directory
    exclude: [
      'src/**/*.tsx',
      'src/**/*.ts',
      'node_modules/**/*.tsx',
      'node_modules/**/*.ts',
    ],
    // include only test files
    include: ['__tests__/**/*.spec.ts'],

    // alias support
    alias: {
      '~/': new URL('src/', import.meta.url).pathname,
    },
    // experimental feature - if it breaks, just remove it
    typecheck: {
      enabled: true,
    },
  },
})
