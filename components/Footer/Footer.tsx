import styled from '@/styled/index'

const Container = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  min-height: 60px;
  padding: 25px 20px;
  position: relative;
  z-index: 1;

  @media (min-width: 1240px) {
    padding: 25px calc(calc(100vw - 1200px) / 2);
  }
`
const InnerContainer = styled.div`
  display: grid;
  place-items: center;
`
const CopyrightText = styled.p`
  margin: 0;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
  font-size: 0.8rem;
`

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <CopyrightText>
          &#169; Yohanes Keanoe 2022
        </CopyrightText>
      </InnerContainer>
    </Container>
  )
}

export default Footer
