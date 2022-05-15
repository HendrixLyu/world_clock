import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 9901
  }, 
  // build: {
  //   outDir:'build_111' //将默认dist文件 改成 build_任意名
  // }
})
