import styled from '@/styled/index'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`

export const MainSection = styled.div`
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`
export const Banner = styled.div`
  background-color: #2b2d42;
  height: 300px;
  width: 100%;
  padding: 10vh 0;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 50%);
  color: #edf2f4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const BannerTitle = styled.h1`
  font-size: 3em;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-align: center;
`
export const BannerDescription = styled.p`
  font-size: 1.5em;
  text-align: center;
`
export const IntroContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const IntroInnerContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #edf2f4;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Intro = styled.p`
  text-align: center;
  font-size: 1.2em;
  line-height: 1.5;
  max-width: 80ch;
  padding: 100px 20px;
`
