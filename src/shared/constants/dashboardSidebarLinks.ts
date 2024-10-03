/* eslint-disable @typescript-eslint/no-explicit-any */
import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const DASHBOARD_NAVIGATION_LINKS = (): InternalLink[] => [
  {
    url: '/dashboard/statistics',
    label: 'Statistics',
    ariaLabel: 'Go to Statistics page',
    icon: ICONS.StatisticsIcon,
    testId: 'link-go-to-statistics',
  },
  {
    url: '/dashboard/customers',
    label: 'Customers',
    ariaLabel: 'Go to Customers page',
    icon: ICONS.CustomersIcon,
    testId: 'link-go-to-customers',
  },
  {
    url: '/dashboard/users',
    label: 'Users',
    ariaLabel: 'Go to Users page',
    icon: ICONS.UsersIcon,
    testId: 'link-go-to-users',
  },
  {
    url: '/api/auth/signout',
    label: 'Log out',
    ariaLabel: 'Log out',
    icon: ICONS.LogoutIcon,
    testId: 'logout',
  },
]
