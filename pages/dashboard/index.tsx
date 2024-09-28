'use client'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ClientPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/client')
    },
  })

  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

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
