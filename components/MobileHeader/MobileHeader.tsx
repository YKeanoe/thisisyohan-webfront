import styled from '@/styled/index'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ArrowUpCircle from '../Icons/ArrowUpCircle'
import GithubIcon from '../Icons/GithubIcon'
import HomeIcon from '../Icons/HomeIcon'
import LinkedinIcon from '../Icons/LinkedinIcon'
import MailIcon from '../Icons/MailIcon'
interface HeaderProps {
  permanent: boolean
  show: boolean
}

const Header = styled.nav<HeaderProps>`
  width: 100vw;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ permanent, show }: HeaderProps) =>
    permanent || show ? '#000000ff' : '#00000000'};
  pointer-events: ${({ permanent, show }: HeaderProps) =>
    permanent || show ? 'all' : 'none'};
  padding: 20px 0;
  transition: background-color 0.4s ease-in-out;
`
const HeaderInner = styled.div<HeaderProps>`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 'home email linkedin github up';
  margin: auto;
  max-width: 1000px;
  opacity: ${({ permanent, show }: HeaderProps) =>
    permanent || show ? '1' : '0'};
  transition: opacity 0.4s ease-in-out;
`

const Button = styled.a`
  display: flex;
  svg {
    height: 30px;

    @media (min-width: 700px) {
      height: 36px;
    }
  }
`
const NonLinkButton = styled.button`
  background: none;
  border: none;
  display: flex;
  padding: 0;
  cursor: pointer;

  svg {
    height: 30px;

    @media (min-width: 700px) {
      height: 36px;
    }
  }
`

const scrollThreshold = 500
const widthThreshold = 900

const NavHeader = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState(0)

  const router = useRouter()

  // Get current scroll position
  const getScrollPosition = () => {
    setScrollY(window.scrollY)
  }

  // Check if screen is mobile size
  const calculateMobileWidth = () => {
    setIsMobileScreen(window.innerWidth < widthThreshold)
  }

  // Event listener for screen width and scroll position
  useEffect(() => {
    calculateMobileWidth()
    window.addEventListener('resize', calculateMobileWidth)
    window.addEventListener('scroll', getScrollPosition)

    return () => {
      window.removeEventListener('resize', calculateMobileWidth)
      window.removeEventListener('scroll', getScrollPosition)
    }
  }, [router])

  // Close menu on route change
  useEffect(() => {
    if (showMobileNav) {
      setShowMobileNav(false)
    }
  }, [router.asPath, showMobileNav])

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Check if homepage
  const isHomepage = () => router.pathname === '/'

  // Check if scroll has pass scrollThreshold
  const hasPassThreshold = () => {
    if (isHomepage()) {
      if (typeof window === 'undefined') return false
      const point: HTMLElement = window.document.querySelector('#contact')
      if (!point) return false
      return scrollY >= point.offsetTop + point.offsetHeight / 2
    } else {
      return scrollY >= scrollThreshold
    }
  }

  return (
    <Header
      permanent={!isHomepage() || isMobileScreen}
      show={hasPassThreshold()}
    >
      <HeaderInner
        permanent={!isHomepage() || isMobileScreen}
        show={hasPassThreshold()}
      >
        {!isHomepage() && (
          <Link href={'/'} passHref>
            <Button style={{ gridArea: 'home' }}>
              <HomeIcon style={{ fill: '#fff' }} />
            </Button>
          </Link>
        )}
        <Link href={'mailto:keanuraharjo@hotmail.com'} passHref>
          <Button style={{ gridArea: 'email' }}>
            <MailIcon style={{ fill: '#fff' }} />
          </Button>
        </Link>
        <Link href={'https://www.linkedin.com/in/ykeanoe/'} passHref>
          <Button style={{ gridArea: 'linkedin' }}>
            <LinkedinIcon style={{ fill: '#fff' }} />
          </Button>
        </Link>
        <Link href={'https://github.com/YKeanoe'} passHref>
          <Button style={{ gridArea: 'github' }}>
            <GithubIcon style={{ fill: '#fff' }} />
          </Button>
        </Link>
        {hasPassThreshold() && (
          <NonLinkButton
            style={{ gridArea: 'up' }}
            onClick={handleScrollToTop}
          >
            <ArrowUpCircle style={{ fill: '#fff' }} />
          </NonLinkButton>
        )}
      </HeaderInner>
    </Header>
  )
}

export default NavHeader
