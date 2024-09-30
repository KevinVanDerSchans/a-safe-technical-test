import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { checkLoginPageSession } from '@app/services/checkLoginPageSession'
import LoginForm from '@features/auth/LoginForm/LoginForm'

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>A-SAFE Technical Test - Login</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>
      <main className='flex items-center justify-center h-screen'>
        <LoginForm />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  return await checkLoginPageSession(context)
}
