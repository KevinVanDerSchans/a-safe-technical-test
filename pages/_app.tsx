import type { AppProps } from 'next/app'
import AuthProvider from '@context/AuthProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/styles.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}

export default App
