import { ExternalLink } from '@sharedTypes/ExternalLink'

interface Props {
  link: Readonly<ExternalLink>
}

const FooterLink = ({ link: { href, icon: Icon, ariaLabel, target, testId, rel } }: Props) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      data-testid={`${testId}-link`}
      className='primary-hover-scale-up'
    >
      <Icon
        data-testid={`${testId}-icon`}
        aria-hidden='true'
        className='text-2xl primary-hover-color-transition'
      />
    </a>
  )
}

export default FooterLink
