import React from 'react'
import Head from 'next/head'
import PostsList from '@features/posts/PostsList'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>A-SAFE DIGITAL</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>
      <main className='flex items-center justify-center'>
        <PostsList />
      </main>
    </>
  )
}
