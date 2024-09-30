import { PluginAPI } from 'tailwindcss/types/config'

export const tailwindPlugins = ({ addBase, addUtilities, theme }: PluginAPI) => {
  addBase({
    '[data-theme="light"]': {
      '--background': theme('colors.light.background'),
      '--foreground': theme('colors.light.foreground'),
      '--primary': theme('colors.light.primary'),
      '--secondary': theme('colors.light.secondary'),
      '--accent': theme('colors.light.accent'),
      '--muted': theme('colors.light.muted'),
    },
    '[data-theme="dark"]': {
      '--background': theme('colors.dark.background'),
      '--foreground': theme('colors.dark.foreground'),
      '--primary': theme('colors.dark.primary'),
      '--secondary': theme('colors.dark.secondary'),
      '--accent': theme('colors.dark.accent'),
      '--muted': theme('colors.dark.muted'),
    },
    '[data-theme="solarized"]': {
      '--background': theme('colors.solarized.background'),
      '--foreground': theme('colors.solarized.foreground'),
      '--primary': theme('colors.solarized.primary'),
      '--secondary': theme('colors.solarized.secondary'),
      '--accent': theme('colors.solarized.accent'),
      '--muted': theme('colors.solarized.muted'),
    },
  })

  addUtilities({
    '.primary-hover-color-transition': {
      'transition-property': 'color',
      'transition-duration': '500ms',
      color: 'var(--secondary)',
      '&:hover': {
        color: 'var(--acent)',
      },
    },
    '.primary-hover-button-transition': {
      'transition-property': 'background-color, color',
      'transition-duration': '500ms',
      'background-color': 'var(--primary)',
      color: 'var(--secondary)',
      'font-weight': 'semibold',
      '&:hover': {
        'background-color': 'var(--acent)',
        color: 'var(--foreground)',
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
}
