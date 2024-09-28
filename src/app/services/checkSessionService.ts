import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

export const checkSessionService = async (context: GetServerSidePropsContext) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=/dashboard',
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
