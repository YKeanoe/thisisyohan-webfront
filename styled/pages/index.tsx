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
  padding: 0 20px calc(var(--s) * 0.25 + 40px);
  width: calc(var(--s) * 3);
  transition: all 0.4s ease-in-out;

  @media (min-width: 400px) {
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
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );
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
`
export const GithubInnerContainer = styled.div`
  --square-size: 15px;
  --square-gap: 5px;
  --week-width: calc(var(--square-size) + var(--square-gap));
`
export const GithubWrapper = styled.div`
  display: inline-grid;
  grid-template-areas: 'empty months' 'days squares';
  grid-gap: 10px;
  grid-template-columns: auto 1fr;
`
export const GithubMonths = styled.ul`
  list-style-type: none;
  grid-area: months;
  display: grid;
  grid-template-columns:
    calc(var(--week-width) * 4) /* Jan */
    calc(var(--week-width) * 4) /* Feb */
    calc(var(--week-width) * 4) /* Mar */
    calc(var(--week-width) * 5) /* Apr */
    calc(var(--week-width) * 4) /* May */
    calc(var(--week-width) * 4) /* Jun */
    calc(var(--week-width) * 5) /* Jul */
    calc(var(--week-width) * 4) /* Aug */
    calc(var(--week-width) * 4) /* Sep */
    calc(var(--week-width) * 5) /* Oct */
    calc(var(--week-width) * 4) /* Nov */
    calc(var(--week-width) * 5) /* Dec */;
`
export const GithubDays = styled.ul`
  grid-area: days;
  list-style-type: none;
  display: grid;
  grid-gap: var(--square-gap);
  grid-template-rows: repeat(7, var(--square-size));
`
export const GithubSquares = styled.ul`
  grid-area: squares;
  list-style-type: none;
  display: grid;
  grid-gap: var(--square-gap);
  grid-template-rows: repeat(7, var(--square-size));
  grid-auto-flow: column;
  grid-auto-columns: var(--square-size);
`
export const GithubSquare = styled.li`
  height: var(--square-size);
  width: var(--square-size);
  background: red;
`
