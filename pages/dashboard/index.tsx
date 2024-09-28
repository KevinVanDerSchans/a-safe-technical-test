import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/checkDashboardPageSession'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>A-SAFE Technical Test - Dashboard</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>
      <main className='flex items-center justify-center h-screen'>
        {session ? <span>Dashboard</span> : <span>You have to be logged!</span>}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
