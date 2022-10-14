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
  overflow-x: auto;
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
