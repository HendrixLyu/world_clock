import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 9901
  }, 
  // build: {
  //   outDir:'build_666' //将默认dist文件 改名为任意名(e.g.: build_666)
  // }
})
