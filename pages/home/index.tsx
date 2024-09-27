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
        <p>Home page</p>
      </main>
    </>
  )
}
