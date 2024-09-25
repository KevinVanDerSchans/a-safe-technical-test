import { MAIN_NAVIGATION_LINKS } from '@shared/constants/mainNavigationLinks'
import MainNavigationLink from '@presentation/components/MainNavigation/MainNavigationLink'

const MainNavigation = () => {
  const mainNavigationLinks = MAIN_NAVIGATION_LINKS()

  return (
    <nav
      aria-label='main navigation'
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
