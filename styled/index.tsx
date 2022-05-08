import styled from '@emotion/styled'

export default styled

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
  padding: 10vh 20px;
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
  font-weight: 400;
  letter-spacing: 0.2em;
  text-align: center;
  margin-bottom: 20px;
`
export const BannerDescription = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
  text-align: center;
`
