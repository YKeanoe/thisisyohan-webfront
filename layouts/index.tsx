import Background from '@/components/Background/Background'
import Footer from '@/components/Footer/Footer'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
import { MainContainer } from '@/styled/shared'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <MainContainer>
      <Background />
      {/* <MobileHeader /> */}
      {children}
      <Footer />
    </MainContainer>
  )
}

export default Layout
