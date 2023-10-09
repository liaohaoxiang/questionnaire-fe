import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock' // mockjs

export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: '_mock',
      enable: true,
      logger: true,
      watchFiles: true, // 是否监视数据文件夹中的文件并重新加载
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@router': '/src/router',
      '@mock': '/mock',
      '@components': '/src/components',
      '@mockjs': '/_mock',
      '@api': '/api',
      '@hooks': '/src/hooks',
      '@constant': '/src/constant',
    },
  },
})
