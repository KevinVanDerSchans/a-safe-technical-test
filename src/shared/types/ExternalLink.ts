import { IconType } from 'react-icons'

export type ExternalLink = {
  href: string
  label?: string | undefined
  ariaLabel: string
  icon: IconType
  testId: string
  target: '_blank'
  rel: 'noopener noreferrer' | undefined
}
