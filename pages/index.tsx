import React from 'react'
import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>A-SAFE Technical Test</title>
        <meta
          name='description'
          content='Built with React, NextJS, TypeScript and Redux'
        />
      </Head>
      <main className='flex items-center justify-center h-screen'>
        <h1>Home Page</h1>
      </main>
    </>
  )
}
