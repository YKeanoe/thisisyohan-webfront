import styled from '@/styled/index'

interface GithubMonthsProps {
  totalWeeks: number[]
}

interface GithubSquareProps {
  dataLevel: number
}

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
export const BannerDescription = styled.h2`
  font-size: 1.5em;
  font-weight: 400;
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
export const SkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SkillIconsContainer = styled.div`
  display: flex;
  --s: 100px;
  --m: 6px;
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  padding: 0 20px calc(var(--s) * 3 + 40px);
  width: calc(var(--s) * 3);
  transition: all 0.4s ease-in-out;

  @media (min-width: 400px) {
    padding: 0 20px calc(var(--s) * 0.25 + 40px);
    width: calc(var(--s) * 4);
  }

  @media (min-width: 500px) {
    width: calc(var(--s) * 5);
  }

  @media (min-width: 600px) {
    width: calc(var(--s) * 6);
  }

  @media (min-width: 700px) {
    width: calc(var(--s) * 7);
  }

  @media (min-width: 800px) {
    width: calc(var(--s) * 8);
  }

  @media (min-width: 900px) {
    width: calc(var(--s) * 9);
  }

  @media (min-width: 1000px) {
    width: calc(var(--s) * 10);
  }
`
export const SkillIconsInnerContainer = styled.div`
  font-size: 0;
  padding-left: 15px;

  &:before {
    content: '';
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 140%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );

    @media (min-width: 400px) {
      height: 120%;
    }
  }
`
export const SkillContainer = styled.a`
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: white;
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  position: relative;
  cursor: pointer;

  &:hover p,
  &:active p,
  &:focus p {
    opacity: 1;
  }
`
export const SkillInnerContainer = styled.div`
  background: #2b2d42;
  position: absolute;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  padding: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`
export const SkillLogo = styled.img`
  max-width: 80%;
  max-height: 80%;
  width: 100px;
`
export const SkillLabel = styled.p`
  color: white;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 0.5em;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`
export const GithubContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GithubCalendar = styled.div`
  margin-bottom: 20px;
  --square-size: 12px;
  --square-gap: 4px;
  --week-width: calc(var(--square-size) + var(--square-gap));
  overflow-x: scroll;
  padding-left: 20px;
  padding-bottom: 10px;
  max-width: 100%;
`
export const GithubCalendarContainer = styled.div`
  width: 840px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`
export const GithubCalendarInnerContainer = styled.div`
  display: inline-grid;
  grid-gap: 10px;
  grid-template-rows: auto 1fr;
`
export const GithubMonths = styled.ul<GithubMonthsProps>`
  color: white;
  display: grid;
  grid-template-columns: ${({ totalWeeks }: GithubMonthsProps) => {
    return totalWeeks
      .map((v) => `calc(var(--week-width) * ${v < 2 ? 2 : v})`)
      .join(' ')
  }};
`
export const GithubSquares = styled.ul`
  display: grid;
  grid-gap: var(--square-gap);
  grid-template-rows: repeat(7, var(--square-size));
  grid-auto-flow: column;
  grid-auto-columns: var(--square-size);
`
export const GithubSquare = styled.li<GithubSquareProps>`
  height: var(--square-size);
  width: var(--square-size);
  border-radius: 2px;
  background: ${({ dataLevel }: GithubSquareProps) => {
    switch (dataLevel) {
      case 1:
        return '#3c4226'
      case 2:
        return '#5f6b33'
      case 3:
        return '#839541'
      case 4:
        return '#a7bf4f'
      case 0:
      default:
        return '#222222'
    }
  }};
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff55;
  }
`
export const GithubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`
export const GithubTotalHeader = styled.h4`
  color: #ccc;
  font-size: 1em;
  text-align: center;
`
export const GithubTotal = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 2em;
  margin: 0;
  text-align: center;
`
export const GithubFailed = styled.p`
  color: #b20808;
  font-weight: 700;
  font-size: 1.2em;
  margin: 0;
  text-align: center;
`
export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const ContactInnerContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #edf2f4;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContactWrapper = styled.div`
  max-width: 800px;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`
export const Contact = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
  gap: 10px;

  svg {
    max-width: 40px;
    width: 100%;
    fill: #fff;
    transition: fill 0.3s ease-in-out;
  }

  p {
    margin: 0;
    text-align: center;
    transition: color 0.3s ease-in-out;
  }

  &:hover,
  &:active,
  &:focus {
    svg {
      fill: #ccc;
    }

    p {
      color: #ccc;
    }
  }
`
