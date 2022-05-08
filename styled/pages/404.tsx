import styled from '@/styled/index'

import { Section as MainSection } from '@/styled/shared'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`
export const Section = styled(MainSection)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SectionInner = styled.div`
  max-width: 80ch;
  margin: auto;
  text-align: center;
`
export const Title = styled.h1`
  color: white;
  font-size: 7.6rem;
`
export const Subtitle = styled.p`
  color: white;
  margin: 0 0 10px;
  font-size: 1.6rem;
`
export const Help = styled.p`
  color: white;
  margin: 0 0 20px;
  font-size: 1.2rem;
`
export const BackButton = styled.a`
  color: white;
  margin: 0;
  border: 1px solid white;
  background: #2b2d42;
  padding: 1em;
  border-radius: 0.5em;
  display: inline-block;

  &:hover,
  &:focus,
  &:active {
    color: #cecece;
  }
`
