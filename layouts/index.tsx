import Footer from '@/components/Footer/Footer'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import { MainContainer } from '@/styled/shared'
import dynamic from 'next/dynamic'

const Background = dynamic(
  () => import('@/components/Background/Background'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0d0d12',
        }}
      />
    ),
  }
)

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <MainContainer>
      <Background />
      <MobileHeader />
      {children}
      <Footer />
    </MainContainer>
  )
}

export default Layout
