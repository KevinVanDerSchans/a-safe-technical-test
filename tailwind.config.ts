import type { Config } from 'tailwindcss'

import themeConfig from './styles/themeConfig'
import { tailwindPlugins } from './styles/tailwindPlugins'

const config: Config = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: themeConfig,
    },
  },
  plugins: [tailwindPlugins],
}

export default config
