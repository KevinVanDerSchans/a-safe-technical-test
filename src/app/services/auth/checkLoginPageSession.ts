import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'

export const checkLoginPageSession: GetServerSideProps = async context => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
