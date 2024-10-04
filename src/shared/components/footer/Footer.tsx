import { FOOTER_LINKS } from '@constants/footerLinks'
import FooterLink from '@sharedComponents/footer/FooterLink'
import ThemeSelector from '@theme/components/ThemeSelector'

const Footer = () => {
  const footerLinks = FOOTER_LINKS()

  return (
    <footer
      role='contentinfo'
      className='w-full'
    >
      <div className='fixed bottom-0 flex justify-between w-full h-16 px-4 md:px-8 bg-[var(--primary)]'>
        <nav
          aria-label='Links to my Portfolio, LinkedIn and GitHub'
          className='flex items-center w-full pl-4 gap-x-4'
        >
          <ul className='flex gap-x-4'>
            {footerLinks.map(link => (
              <li key={`${link.href}-${link.label}`}>
                <FooterLink link={link} />
              </li>
            ))}
          </ul>
        </nav>

        <div className='items-center justify-center flex pb-4 px-8'>
          <ThemeSelector />
        </div>

        <section
          aria-labelledby='footer-contact'
          className='flex items-center'
        >
          <address
            id='footer-contact'
            className='flex-col items-center text-sm not-italic leading-none text-right text-[var(--secondary)]'
          >
            KEVIN SCHANS © <span className='text-xs'>2024</span>
          </address>
        </section>
      </div>
    </footer>
  )
}

export default Footer
