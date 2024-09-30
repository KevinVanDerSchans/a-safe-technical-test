import type { AppProps } from 'next/app'
import AuthProvider from '@context/AuthProvider'
import ReduxProvider from '@context/ReduxProvider'
import { ThemeProvider } from '@context/ThemeProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <ThemeProvider>
        <ReduxProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ReduxProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
