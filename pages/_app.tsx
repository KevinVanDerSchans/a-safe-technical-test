import type { AppProps } from 'next/app'
import AuthProvider from '@context/AuthProvider'
import { ThemeProvider } from '@context/ThemeProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <ThemeProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
