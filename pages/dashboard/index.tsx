import React from 'react'
import Seo from '@sharedComponents/Seo'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/auth/checkDashboardPageSession'
import DashboardLayout from '@layouts/DashboardLayout'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Dashboard'
        description='Access your A-SAFE DIGITAL dashboard to view personalized insights.'
      />

      {session ? (
        <DashboardLayout>
          <main className='flex items-center justify-center min-h-screen px-4'>
            <div className='flex flex-col items-center text-center pb-8'>
              <h1 className='text-3xl md:text-5xl'>DASHBOARD</h1>
              <h2 className='mt-4 text-lg md:text-xl'>Choose an option in the Dashboard navigation bar.</h2>
            </div>
          </main>
        </DashboardLayout>
      ) : (
        <main className='flex items-center justify-center min-h-screen px-4'>
          <p className='text-lg md:text-xl'>You have to be logged!</p>
        </main>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
