/* eslint-disable @typescript-eslint/no-explicit-any */
import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const DASHBOARD_NAVIGATION_LINKS = (): InternalLink[] => [
  {
    url: '/dashboard/statistics',
    label: 'Statistics',
    ariaLabel: 'Go to Statistics page',
    icon: ICONS.MdOutlineDataThresholding,
    testId: 'link-go-to-statistics',
  },
  {
    url: '/dashboard/customers',
    label: 'Customers',
    ariaLabel: 'Go to Customers page',
    icon: ICONS.FaUsers,
    testId: 'link-go-to-customers',
  },
  {
    url: '/dashboard/users',
    label: 'Users',
    ariaLabel: 'Go to Users page',
    icon: ICONS.FiUsers,
    testId: 'link-go-to-users',
  },
  {
    url: '/api/auth/signout',
    label: 'Log out',
    ariaLabel: 'Log out',
    icon: ICONS.IoMdLogOut,
    testId: 'logout',
  },
]
