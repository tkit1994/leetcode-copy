import { defineConfig } from 'vite'
import TMPlugin from 'vite-plugin-tm-userscript'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TMPlugin({
			externalGlobals: []
		})
	]
})
