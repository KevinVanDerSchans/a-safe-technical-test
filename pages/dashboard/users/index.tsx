import React from 'react'
import Seo from '@sharedComponents/Seo'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { checkDashboardPageSession } from '@app/services/auth/checkDashboardPageSession'
import DashboardLayout from '@layouts/DashboardLayout'
import UsersList from '@features/users/UsersList'

export default function UsersPage() {
  const { data: session } = useSession()

  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Users'
        description='Manage user profiles in A-SAFE DIGITAL and view detailed user information.'
      />
      <main className='flex items-center justify-center'>
        {session ? (
          <DashboardLayout>
            <UsersList />
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
