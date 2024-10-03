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
          <div></div>
        </DashboardLayout>
      ) : (
        <main className='flex items-center justify-center'>
          <p>You have to be logged!</p>
        </main>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
