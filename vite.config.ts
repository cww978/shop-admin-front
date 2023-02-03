import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  // const env = loadEnv(mode, process.cwd())
  // https://vitejs.dev/config/
  return defineConfig({
    base: '/',
    plugins: [react()],
    // build: {
    //   outDir: env.VITE_APP_BUILD === 'prod' ? 'dist-prod' : env.VITE_APP_BUILD === 'johnson' ? 'dist-johnson' : 'dist'
    // },
    build: {
      outDir: 'dist'
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: true,
      port: 3001, // 设置服务启动端口号
      open: false, // 设置服务启动时是否自动打开浏览器
      cors: true, // 允许跨域
      // 设置代理，根据项目实际情况配置
      proxy: {
      }
    }
  })
}
