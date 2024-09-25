import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'A-SAFE Technical Test',
  description: 'Built with React, NextJS, TypeScript and Redux',
  creator: 'Kevin van der Schans Delgado',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='/fonts/GeistVF.woff'
          as='font'
          type='font/woff'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/GeistMonoVF.woff'
          as='font'
          type='font/woff'
          crossOrigin='anonymous'
        />
      </head>
      <body>
        <div
          role='region'
          aria-label='main-content'
        >
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
