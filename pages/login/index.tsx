import React from 'react'
import Seo from '@sharedComponents/Seo'
import { GetServerSideProps } from 'next'
import { checkLoginPageSession } from '@auth/services/checkLoginPageSession'
import LoginForm from '@auth/components/LoginForm'

export default function LoginPage() {
  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Login'
        description='Login to your A-SAFE DIGITAL account and manage your settings securely.'
      />
      <main className='flex items-center justify-center h-screen'>
        <LoginForm />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkLoginPageSession(context)
}
