import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

export const checkDashboardPageSession = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
