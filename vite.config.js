import {defineConfig} from 'vite'
import svgLoader from 'vite-svg-loader'
import {viteStaticCopy} from 'vite-plugin-static-copy'
import autoprefixer from 'autoprefixer'
import * as path from "path";

export default defineConfig(({command, mode}) => {
  return {
    mode: 'production',
    plugins: [
      svgLoader(),
      viteStaticCopy({
        targets: [
          {
            src: path.resolve(__dirname, './assets/Image') + '/[!.]*',
            dest: 'Image'
          }
        ]
      })
    ],
    publicDir: false,
    base: './',
    build: {
      manifest: true,
      target: 'es2020',
      rollupOptions: {
        input: 'assets/JavaScript/app.js',
      },
      outDir: 'packages/site-distribution/Resources/Public/',
      dynamicImportVarsOptions: {
        exclude: []
      },
    },
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [
          autoprefixer({}) // add options if needed
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: `$mode: ${mode};`,
        },
      },
    },
    server: {
      origin: `${process.env.DDEV_PRIMARY_URL}:${process.env.VITE_PRIMARY_PORT}/`,
    },
  }
});
