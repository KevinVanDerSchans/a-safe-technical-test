import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const MAIN_NAVIGATION_LINKS = (): InternalLink[] => [
  {
    url: '/',
    label: 'home',
    ariaLabel: 'Home page',
    icon: ICONS.HomeIcon,
    testId: 'link-go-to-home',
  },
]
