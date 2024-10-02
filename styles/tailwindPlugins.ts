import { PluginAPI } from 'tailwindcss/types/config'

export const tailwindPlugins = ({ addBase, addUtilities, theme }: PluginAPI) => {
  addBase({
    '[data-theme="light"]': {
      '--background': theme('colors.light.background'),
      '--foreground': theme('colors.light.foreground'),
      '--primary': theme('colors.light.primary'),
      '--secondary': theme('colors.light.secondary'),
      '--accent': theme('colors.light.accent'),
      '--accentLight': theme('colors.light.accentLight'),
      '--muted': theme('colors.light.muted'),
      '--error': theme('colors.light.error'),
      '--errorLight': theme('colors.light.errorLight'),
      '--errorText': theme('colors.light.errorText'),
    },
    '[data-theme="dark"]': {
      '--background': theme('colors.dark.background'),
      '--foreground': theme('colors.dark.foreground'),
      '--primary': theme('colors.dark.primary'),
      '--secondary': theme('colors.dark.secondary'),
      '--accent': theme('colors.dark.accent'),
      '--accentLight': theme('colors.dark.accentLight'),
      '--muted': theme('colors.dark.muted'),
      '--error': theme('colors.dark.error'),
      '--errorLight': theme('colors.dark.errorLight'),
      '--errorText': theme('colors.dark.errorText'),
    },
    '[data-theme="solarized"]': {
      '--background': theme('colors.solarized.background'),
      '--foreground': theme('colors.solarized.foreground'),
      '--primary': theme('colors.solarized.primary'),
      '--secondary': theme('colors.solarized.secondary'),
      '--accent': theme('colors.solarized.accent'),
      '--accentLight': theme('colors.solarized.accentLight'),
      '--muted': theme('colors.solarized.muted'),
      '--error': theme('colors.solarized.error'),
      '--errorLight': theme('colors.solarized.errorLight'),
      '--errorText': theme('colors.solarized.errorText'),
    },
  })

  addUtilities({
    '.primary-hover-color-transition': {
      'transition-property': 'color',
      'transition-duration': '500ms',
      color: 'var(--secondary)',
      '&:hover': {
        color: 'var(--accent)',
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
        color: 'var(--dark)',
        'font-weight': 'semibold',
      },
    },
    '.primary-hover-card-transition': {
      'box-shadow': '0 0 20px rgba(65, 11, 31, 0.3)',
      'transition-property': 'all',
      'transition-duration': '300ms',
      '&:hover': {
        'box-shadow': '0 0 20px rgba(65, 11, 31, 0.9)',
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
