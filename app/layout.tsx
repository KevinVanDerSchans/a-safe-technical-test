import type { Metadata } from 'next'
import '@styles/globals.css'

import Providers from '@context/Providers'
import MainLayout from '@layouts/MainLayout'

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
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
