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
export const Title = styled.h1`
  padding: 0 20px;
  font-size: 2.4em;
  margin-bottom: 40px;
  border-bottom: 2px solid black;
`
export const SkillIcon = styled.img`
  margin-right: 0.4em;
  height: 0.8em;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
