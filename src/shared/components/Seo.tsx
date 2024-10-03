import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title: string
  description?: string
}

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && (
        <meta
          name='description'
          content={description}
        />
      )}
    </Head>
  )
}

export default Seo
