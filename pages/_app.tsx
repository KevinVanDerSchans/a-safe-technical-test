import type { AppProps } from 'next/app'
import MainLayout from '@layouts/MainLayout'
import '@styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App
