import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/auth/checkDashboardPageSession'
import UsersList from '@features/users/UsersList'

export default function UsersPage() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>A-SAFE DIGITAL - Users</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>
      <main className='flex items-center justify-center py-12'>
        {session ? <UsersList /> : <span>You have to be logged!</span>}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
