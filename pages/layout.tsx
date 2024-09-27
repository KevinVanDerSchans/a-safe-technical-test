// import Providers from '@context/Providers'
import MainLayout from '@layouts/MainLayout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {/* <Providers> */}
        <MainLayout>{children}</MainLayout>
        {/* </Providers> */}
      </body>
    </html>
  )
}
