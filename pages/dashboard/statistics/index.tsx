import React from 'react'
import Seo from '@sharedComponents/Seo'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@auth/services/checkDashboardPageSession'
import DashboardLayout from '@layouts/DashboardLayout'
import WebExtensionChart from '@charts/components/WebExtensionChart/WebExtensionChart'

export default function StatisticsPage() {
  const { data: session } = useSession()

  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Statistics'
        description='Analyze key metrics and statistics in A-SAFE DIGITAL to gain insights into digital safety performance.'
      />
      <main className='flex items-center justify-center'>
        {session ? (
          <DashboardLayout>
            <div>
              <WebExtensionChart />
            </div>
          </DashboardLayout>
        ) : (
          <p>You have to be logged!</p>
        )}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkDashboardPageSession(context)
}
