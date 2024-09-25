import ICONS from '@shared/constants/icons'

import { InternalLink } from '@shared/types/InternalLink'

export const MAIN_NAVIGATION_LINKS = (): InternalLink[] => [
  {
    url: '/',
    label: 'home',
    ariaLabel: 'Home page',
    icon: ICONS.HomeIcon,
    testId: 'link-go-to-home',
  },
]
