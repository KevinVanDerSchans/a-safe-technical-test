import { DASHBOARD_NAVIGATION_LINKS } from '@constants/dashboardSidebarLinks'
import DashboardNavigationLink from '@dashboard/components/DashboardNavigation/DashboardNavigationLink'

const DashboardNavigation = () => {
  const dashboardNavigationLinks = DASHBOARD_NAVIGATION_LINKS()

  return (
    <nav
      aria-label='Dashboard navigation'
      data-testid='dashboard-navigation'
      className='flex flex-col space-y-2'
    >
      <ul className='flex-col space-y-4'>
        {dashboardNavigationLinks.map(link => (
          <li
            key={`${link.url}-${link.label}`}
            className='text-[var(--secondary)]'
          >
            <DashboardNavigationLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DashboardNavigation
