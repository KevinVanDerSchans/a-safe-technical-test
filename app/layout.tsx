import type { Metadata } from 'next'
import '@styles/globals.css'

import Header from '@presentation/components/Header/Header'
import Footer from '@presentation/components/Footer/Footer'

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
      <head></head>
      <body>
        <div
          role='region'
          aria-label='main-content'
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
