import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const paths = {
  '@': 'src',
  '@assets': 'src/assets',
  '@components': 'src/components',
  '@lib': 'src/lib',
  '@styles': 'src/styles'
}

export default defineConfig({
  plugins: [react(), pathsResolver(paths)]
})

function pathsResolver(paths) {
  const projectRootDir = resolve(__dirname)
  const keys = Object.keys(paths)
  const entries = keys.map((k, i) => {
    return {
      find: k,
      replacement: resolve(projectRootDir, paths[k])
    }
  })

  return alias({ entries })
}
