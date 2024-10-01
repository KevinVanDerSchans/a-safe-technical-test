import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/auth/checkDashboardPageSession'
import DashboardLayout from '@layouts/DashboardLayout'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>A-SAFE DIGITAL - Dashboard</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>

      {session ? (
        <DashboardLayout>
          <div></div>
        </DashboardLayout>
      ) : (
        <main className='flex items-center justify-center'>
          <span>You have to be logged!</span>
        </main>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
