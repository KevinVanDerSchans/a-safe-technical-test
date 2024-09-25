import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        tertiary: '#0284c7',

        light: '#fff',
        dark: '#000',

        greyBackground: '#c5c5c54d',

        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.primary-hover-color-transition': {
          'transition-property': 'color',
          'transition-duration': '500ms',
          color: '#fff',
          '&:hover': {
            color: '#0284c7',
          },
        },

        '.primary-hover-button-transition': {
          'transition-property': 'background-color, color',
          'transition-duration': '500ms',
          'background-color': '#000',
          color: '#fff',
          'font-weight': 'semibold',
          '&:hover': {
            'background-color': '#0284c7',
            color: '#000',
            'font-weight': 'semibold',
          },
        },

        '.primary-hover-scale-up': {
          'transition-property': 'transform',
          'transition-duration': '500ms',
          'transition-timing-function': 'ease-in-out',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.25)',
          },
        },
      })
    },
  ],
}

export default config
