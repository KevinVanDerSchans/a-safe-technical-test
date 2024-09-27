import Head from 'next/head'
import HomePage from '@pages/home/index'

export default function App() {
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
        <HomePage />
      </main>
    </>
  )
}
