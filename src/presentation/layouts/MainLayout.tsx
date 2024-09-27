import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div
      role='region'
      aria-label='main-content'
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
