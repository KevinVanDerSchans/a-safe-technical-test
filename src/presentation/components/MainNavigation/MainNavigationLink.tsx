import Link from 'next/link'
import { InternalLink } from '@shared/types/InternalLink'

interface Props {
  link: InternalLink
}

const MainNavigationLink = ({ link: { url, label, icon: Icon, ariaLabel, testId } }: Props) => {
  return (
    <Link
      href={url}
      aria-label={ariaLabel}
      className='flex items-center'
    >
      <Icon
        data-testid={`${testId}`}
        className='w-10 h-10 primary-hover-color-transition'
      />
      <span className='sr-only'>{label}</span>
    </Link>
  )
}

export default MainNavigationLink
