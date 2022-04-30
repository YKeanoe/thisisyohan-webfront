import styled from '@/styled/index'

export const MainContainer = styled.div`
  min-height: 100%;
  height: 100%;
  position: relative;
`
export const Section = styled.div`
  min-height: 100%;
  margin: auto;
  height: 100%;
  position: relative;
`
export const SectionTitle = styled.h3`
  font-size: 2em;
  margin-bottom: 40px;
  color: white;
`
export const FormRow = styled.div`
  display: flex;
  margin-bottom: 8px;

  & > * {
    flex-grow: 1;
  }

  &:focus-visible {
    outline: none;
  }
`
export const FormErrorMessage = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-left: 120px;
  color: #e83030;
  margin-top: 5px;
`
