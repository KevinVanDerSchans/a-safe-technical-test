import React from 'react'
import Seo from '@sharedComponents/Seo'
import PostsList from '@features/posts/PostsList'

export default function HomePage() {
  return (
    <>
      <Seo
        title='A-SAFE DIGITAL'
        description='Welcome to the homepage of A-SAFE DIGITAL.'
      />
      <main className='flex items-center justify-center'>
        <PostsList />
      </main>
    </>
  )
}
