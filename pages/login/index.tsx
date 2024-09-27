import Head from 'next/head'
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
