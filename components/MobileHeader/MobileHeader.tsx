// import SnackbarContext from '@/contexts/SnackbarContext'
import styled from '@/styled/index'
import { i18n, useTranslation } from 'i18n'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import HamburgerButton from '../HamburgerButton/HamburgerButton'
import DiscordIcon from '../Icons/discord'
import FacebookIcon from '../Icons/facebook'
import InstagramIcon from '../Icons/instagram'
import TiktokIcon from '../Icons/tiktok'
import TwitterIcon from '../Icons/twitter'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Navigation from '../Navigation/Navigation'

interface MobileNavProps {
  isActive: boolean
}

const MainHeader = styled.header`
  width: 100vw;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 20px 0px;
  background: rgba(0, 0, 0, 0);
  transition: all 0.4s ease-in-out;
  font-size: 1rem;

  &.mini {
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.4);

    & img {
      max-height: 40px;
      transition: all 0.4s ease-in-out;
    }

    @media (min-width: 900px) {
      padding: 10px 20px 0px;
    }

    @media (min-width: 1820px) {
      padding: 10px calc(calc(100vw - 1800px) / 2) 0;
    }
  }

  @media (min-width: 900px) {
    padding: 25px 20px 0px;
  }

  @media (min-width: 1840px) {
    padding: 25px calc(calc(100vw - 1800px) / 2) 0;
  }
`
const MainNav = styled.nav`
  display: grid;
  grid-template-columns: 120px 1fr 80px;
  grid-template-areas: '. desktop right';
  align-items: center;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 120px 1fr 120px;
  }
`
const NavContainer = styled.div`
  display: grid;
  grid-auto-rows: 40px;
  row-gap: 10px;

  a {
    margin: 0;
    text-align: center;
    padding: 0 20px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const NavCTAContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  align-items: normal;
  border-top: 1px solid #aaa;
  gap: 20px;

  > * {
    justify-content: center;
    margin-right: 0;
    margin-bottom: 10px;

    &:last-child {
      margin: 0;
    }
  }
`
const DesktopNavContainer = styled.div`
  grid-area: desktop;
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`
const MobileNavContainer = styled.div<MobileNavProps>`
  position: absolute;
  top: 0;
  z-index: 998;
  background: #fff;
  width: 250px;
  height: 100vh;
  right: ${(props) => (props.isActive ? '0px' : '-250px')};
  opacity: ${(props) => (props.isActive ? '1' : '0')};
  transition: right 0.4s, visibility 0.4s, opacity 0.4s;
  border-radius: 4px;
  overflow-x: hidden;
  @media (min-width: 999px) {
    right: ${(props) =>
      props.isActive ? 'calc(calc(100vw - 1000px) / 2)' : '-250px'};
  }
`
const MobileNavHeader = styled.div`
  padding-top: 60px;
  background: black;

  @media (min-width: 900px) {
    padding-top: 65px;
  }
`
const MobileNavOverlay = styled.div`
  display: ${(props: { isActive: boolean }) =>
    props.isActive ? 'block' : 'none'};
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 99;
  background-color: #000;
  opacity: 0.65;
`
const MLanguageSwitchContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px 20px;
  align-items: center;
  color: #fff;
`
interface MLanguageButtonProps {
  isSelected?: boolean
}
const MLanguageButton = styled.button<MLanguageButtonProps>`
  border: 1px solid
    ${(props: MLanguageButtonProps) =>
      props.isSelected ? '#000' : '#fff'};
  color: #000;
  width: 100%;
  background: none;
  outline: none;
  font-family: 'Neuton';
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: normal;
  padding: 0.2em 0.6em;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid #000;
  }
`
const SocialMediaLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 8px 14px;
  align-items: center;
  color: #fff;
  margin-top: 10px;
`
const SocialMediaButton = styled.a`
  background-color: #333f6f;
  padding: 6px 16px;
  border-radius: 10px;
  border: none;
  fill: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: #3b4981;
  }
`
const HeadLogo = styled.img`
  max-height: 40px;
`

const NavHeader = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const router = useRouter()
  // const snackBar = useContext(SnackbarContext)

  const languages = [
    { value: 'en', label: 'English', mLabel: 'ENG' },
    { value: 'id', label: 'Indonesian', mLabel: 'IND' },
    { value: 'th', label: 'Thailand', mLabel: 'THA' },
    { value: 'vn', label: 'Vietnamese', mLabel: 'VIE' },
  ]

  const {
    i18n: { language },
  } = useTranslation('common')

  const [scrollY, setScrollY] = useState(0)
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [tempScrollY, setTempScrollY] = useState(0)

  // Get current scroll position
  const getScrollPosition = () => {
    setScrollY(window.scrollY)
  }

  // Check if screen is mobile size
  const calculateMobileWidth = () => {
    setIsMobileScreen(window.innerWidth < 900)
  }

  // Overlay system
  useEffect(() => {
    if (showMobileNav) {
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      setTempScrollY(scrollY)
    } else {
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
      window.scrollTo(0, tempScrollY)
      setTempScrollY(0)
    }
  }, [showMobileNav])

  // Remove overlay
  useEffect(() => {
    return () => {
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
    }
  }, [])

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
  }, [router.asPath])

  return (
    <MainHeader
      className={`${isMobileScreen || scrollY >= 200 ? 'mini' : ''}`}
    >
      <MainNav>
        <HeadLogo
          src={'images/logo.png'}
          alt={'Legends of Chronos Logo'}
        />

        <DesktopNavContainer>
          <NavContainer>
            <Navigation isMobile={false} />
          </NavContainer>
        </DesktopNavContainer>

        <HamburgerButton
          isActive={showMobileNav}
          onClick={() => setShowMobileNav(!showMobileNav)}
          style={{ gridArea: 'right' }}
        />

        <LanguageSwitcher
          onLanguageChange={(lang) => i18n.changeLanguage(lang)}
          options={languages}
          selected={language}
          style={{ gridArea: 'right' }}
        />

        <MobileNavContainer isActive={showMobileNav}>
          <MobileNavHeader />
          <NavContainer>
            <Navigation isMobile={true} />
          </NavContainer>

          <NavCTAContainer>
            {/* Mobile Language Switcher */}
            <MLanguageSwitchContainer>
              {languages.map((lang) => (
                <MLanguageButton
                  isSelected={language === lang.value}
                  onClick={() => {
                    setShowMobileNav(false)
                    i18n.changeLanguage(lang.value)
                  }}
                  key={lang.value}
                >
                  {lang.mLabel}
                </MLanguageButton>
              ))}
            </MLanguageSwitchContainer>
          </NavCTAContainer>
          <NavCTAContainer>
            {/* Mobile Social Media Links */}
            <SocialMediaLinks>
              <Link href={'https://discord.gg/9Cr4U62rCm'} passHref>
                <SocialMediaButton>
                  <DiscordIcon style={{ height: '20px' }} />
                </SocialMediaButton>
              </Link>
              <Link
                href={'https://www.facebook.com/legendschronos'}
                passHref
              >
                <SocialMediaButton>
                  <FacebookIcon style={{ height: '20px' }} />
                </SocialMediaButton>
              </Link>
              <Link
                href={'https://www.instagram.com/legendsofchronos'}
                passHref
              >
                <SocialMediaButton>
                  <InstagramIcon style={{ height: '20px' }} />
                </SocialMediaButton>
              </Link>
              <Link href={'https://twitter.com/LegendsChronos'} passHref>
                <SocialMediaButton>
                  <TwitterIcon style={{ height: '20px' }} />
                </SocialMediaButton>
              </Link>
              <Link
                href={'https://www.tiktok.com/@legendschronos'}
                passHref
              >
                <SocialMediaButton>
                  <TiktokIcon style={{ height: '20px' }} />
                </SocialMediaButton>
              </Link>
            </SocialMediaLinks>
          </NavCTAContainer>
        </MobileNavContainer>

        <MobileNavOverlay
          isActive={showMobileNav}
          onClick={() => setShowMobileNav(false)}
        />
      </MainNav>
    </MainHeader>
  )
}

export default NavHeader
