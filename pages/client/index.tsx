'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function ClientPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/client')
    },
  })

  const router = useRouter()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <main className='flex items-center justify-center h-screen'>
      {session?.user ? <span>Client page</span> : <span>No estás logueado</span>}
    </main>
  )
}
