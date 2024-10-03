/* eslint-disable @typescript-eslint/no-explicit-any */
import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const MAIN_NAVIGATION_LINKS = (session: any): InternalLink[] => {
  if (session) {
    return [
      {
        url: '/dashboard/statistics',
        label: 'Dashboard',
        ariaLabel: 'Go to Dashboard page',
        icon: ICONS.DashboardIcon,
        testId: 'link-go-to-dashboard',
      },
      {
        url: '/api/auth/signout',
        label: 'Logout',
        ariaLabel: 'Logout',
        icon: ICONS.LogoutIcon,
        testId: 'logout',
      },
    ]
  }

  return [
    {
      url: '/login',
      label: 'Login',
      ariaLabel: 'Go to Login page',
      icon: ICONS.LoginIcon,
      testId: 'link-to-login',
    },
  ]
}
