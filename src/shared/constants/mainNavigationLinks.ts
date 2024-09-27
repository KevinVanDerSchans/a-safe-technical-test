import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const MAIN_NAVIGATION_LINKS = (): InternalLink[] => [
  {
    url: '/',
    label: 'Home',
    ariaLabel: 'Go to Home page',
    icon: ICONS.HomeIcon,
    testId: 'link-go-to-home',
  },
  {
    url: '/api/auth/signin',
    label: 'Login',
    ariaLabel: 'Go to Login page',
    icon: ICONS.LoginIcon,
    testId: 'link-to-login',
  },
]
