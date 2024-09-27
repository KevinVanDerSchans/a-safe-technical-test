import { MAIN_NAVIGATION_LINKS } from '@constants/mainNavigationLinks'
import MainNavigationLink from '@components/MainNavigation/MainNavigationLink'
import { useSession } from 'next-auth/react'

const MainNavigation = () => {
  const { data: session } = useSession()
  const mainNavigationLinks = MAIN_NAVIGATION_LINKS(session)

  return (
    <nav
      aria-label='Main navigation'
      data-testid='main-navigation'
      className='flex'
    >
      <ul className='flex space-x-4'>
        {mainNavigationLinks.map(link => (
          <li key={`${link.url}-${link.label}`}>
            <MainNavigationLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNavigation
