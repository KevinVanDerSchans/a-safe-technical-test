import { FOOTER_LINKS } from '@constants/footerLinks'
import FooterLink from '@components/Footer/FooterLink'

const Footer = () => {
  const footerLinks = FOOTER_LINKS()

  return (
    <footer
      role='contentinfo'
      className='w-full'
    >
      <main className='fixed bottom-0 flex justify-between w-full h-16 px-8 bg-primary'>
        <nav
          aria-label='footer'
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

        <section
          role='region'
          className='flex items-center'
        >
          <address className='flex-col items-center text-sm not-italic leading-none text-right text-light'>
            KEVIN SCHANS © <span className='text-xs'>2024</span>
          </address>
        </section>
      </main>
    </footer>
  )
}

export default Footer
