import ICONS from '@constants/icons'
import { ExternalLink } from '@sharedTypes/ExternalLink'

export const FOOTER_LINKS = (): readonly Readonly<ExternalLink>[] => [
  {
    href: 'https://kevin-van-der-schans.vercel.app',
    ariaLabel: 'Visit my Portfolio',
    icon: ICONS.PortfolioIcon,
    target: '_blank',
    testId: 'portfolio',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://www.linkedin.com/in/kevinvanderschans',
    ariaLabel: 'Visit my LinkedIn',
    icon: ICONS.LinkedInIcon,
    target: '_blank',
    testId: 'linkedin',
    rel: 'noopener noreferrer',
  },
  {
    href: 'https://github.com/KevinVanDerSchans?tab=repositories',
    ariaLabel: 'Visit my GitHub',
    icon: ICONS.GitHubIcon,
    target: '_blank',
    testId: 'github',
    rel: 'noopener noreferrer',
  },
]
