import styled from '@/styled/index'
import { Section as MainSection } from '@/styled/shared'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`
export const Section = styled(MainSection)`
  background: white;
  height: unset;
  padding: 40px 20px;
`
export const SectionInner = styled.div`
  max-width: 1000px;
  margin: auto;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 20px;
  margin-bottom: 20px;
`
export const Title = styled.h1`
  font-size: 2.4em;
  margin-bottom: 10px;
  padding-right: 0.5ch;
  border-bottom: 2px solid black;
`
export const GithubLink = styled.a`
  margin-right: 0.4em;

  & > * {
    height: 0.8em;
    transition: fill 0.3s ease-in-out;
  }

  &:hover > *,
  &:focus > *,
  &:active > * {
    fill: #4d4d4d;
  }
`
export const FrameworksContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
`
export const Framework = styled.img`
  max-width: 2em;
  max-height: 2em;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
export const MarkdownContainer = styled.div`
  max-width: 80ch;
  font-size: 1.1rem;

  > * {
    white-space: pre-line;
  }
`
export const DisplaysContainer = styled.div`
  margin-top: 60px;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const DisplayContainer = styled.div`
  width: 100%;
  max-width: 380px;
  position: relative;
  height: fit-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;

  &:hover > p,
  &:active > p,
  &:focus > p {
    opacity: 1;
  }
`
export const Display = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 600px;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
export const DisplayDesc = styled.p`
  margin: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #00000099;
  padding: 1em;
  font-weight: bold;
  font-size: 1.4em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  pointer-events: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
  text-align: center;
`
