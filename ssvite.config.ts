// import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
const ABSOLUTE_BASE = __dirname
const ENV = 'configz/web'
export default ({ mode }) => {
  const isDev = process.env.NODE_ENV === 'development'
  return defineConfig({
    root: __dirname,
    define: {
      'process.env': {},
    },
    optimizeDeps: {
      include: [],
      exclude: [],
      esbuildOptions: {
        plugins: [esbuildCommonjs(['gifler'])],
      },
    },
    esbuild: {
      // target: 'es2020' ,
      // pure: !isDev ? ['console.log'] : undefined,
      // minify: false,
      // sourcemap: true,
      // minifyIdentifiers: false,
      // minifyWhitespace: false,
      // minifySyntax: !isDev,
    },
    build: {
      commonjsOptions: {},
      minify: 'terser',
      terserOptions: {
        compress: {
          defaults: false,
          drop_console: true,
        },
        mangle: {
          safari10: false,
          properties: false,
        },
      },
    },
    plugins: [viteCommonjs()],
  })
}
