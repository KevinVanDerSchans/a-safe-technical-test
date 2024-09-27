import type { AppProps } from 'next/app'
import AuthProvider from '@context/AuthProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}

export default App
