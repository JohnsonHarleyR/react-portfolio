import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      plugins: [react(), tsconfigPaths()],
      define: {
          'process.env': env
      }
  }
});