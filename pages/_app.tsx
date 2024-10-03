import type { AppProps } from 'next/app'
import AuthProvider from '@context/AuthProvider'
import { ErrorProvider } from '@context/ErrorProvider'
import ReduxProvider from '@context/ReduxProvider'
import { ThemeProvider } from '@context/ThemeProvider'
import MainLayout from '@layouts/MainLayout'
import '@styles/styles.css'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider session={session}>
      <ErrorProvider>
        <ThemeProvider>
          <ReduxProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ReduxProvider>
        </ThemeProvider>
      </ErrorProvider>
    </AuthProvider>
  )
}

export default App
