/* eslint-disable @typescript-eslint/no-explicit-any */
import ICONS from '@constants/icons'
import { InternalLink } from '@sharedTypes/InternalLink'

export const MAIN_NAVIGATION_LINKS = (session: any): InternalLink[] => {
  if (session) {
    return [
      {
        url: '/dashboard',
        label: 'Dashboard',
        ariaLabel: 'Go to Dashboard page',
        icon: ICONS.VscDashboard,
        testId: 'link-go-to-dashboard',
      },
      {
        url: '/',
        label: 'Home',
        ariaLabel: 'Go to Home page',
        icon: ICONS.HomeIcon,
        testId: 'link-go-to-home',
      },
      {
        url: '/api/auth/signout',
        label: 'Logout',
        ariaLabel: 'Logout',
        icon: ICONS.IoMdLogOut,
        testId: 'logout',
      },
    ]
  }

  return [
    {
      url: '/',
      label: 'Home',
      ariaLabel: 'Go to Home page',
      icon: ICONS.HomeIcon,
      testId: 'link-go-to-home',
    },
    {
      url: '/api/auth/signin',
      label: 'Login',
      ariaLabel: 'Go to Login page',
      icon: ICONS.LoginIcon,
      testId: 'link-to-login',
    },
  ]
}
