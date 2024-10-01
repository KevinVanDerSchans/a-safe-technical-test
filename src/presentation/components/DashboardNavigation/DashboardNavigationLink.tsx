import Link from 'next/link'
import { InternalLink } from '@sharedTypes/InternalLink'

interface Props {
  link: InternalLink
}

const DashboardNavigationLink = ({ link: { url, label, icon: Icon, ariaLabel, testId } }: Props) => {
  return (
    <Link
      href={url}
      aria-label={ariaLabel}
      className='flex items-center hover:bg-[var(--accent)] rounded-lg p-2'
    >
      <Icon
        data-testid={`${testId}`}
        className='w-10 h-10'
      />
      <span className='px-4'>{label}</span>
      <span className='sr-only'>{label}</span>
    </Link>
  )
}

export default DashboardNavigationLink
