import React from 'react'
import Seo from '@sharedComponents/Seo'

export default function Custom404() {
  return (
    <>
      <Seo
        title='A-SAFE DIGITAL - Page Not Found'
        description="The page you're looking for doesn't exist. Explore A-SAFE DIGITAL or return to the homepage."
      />
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-3xl font-bold text-[var(--primary)]'>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  )
}
