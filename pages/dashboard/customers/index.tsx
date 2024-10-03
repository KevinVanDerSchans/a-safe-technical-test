import React from 'react'
import Seo from '@sharedComponents/Seo'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/auth/checkDashboardPageSession'
import DashboardLayout from '@layouts/DashboardLayout'
import CustomersList from '@features/customers/CustomersList'

export default function CustomersPage() {
  const { data: session } = useSession()

  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Customers'
        description='View and manage customers information in A-SAFE DIGITAL, including profiles and contact details.'
      />
      <main className='flex items-center justify-center'>
        {session ? (
          <DashboardLayout>
            <CustomersList />
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
