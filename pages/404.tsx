import HeadComponent from '@/components/Head/Head'
import {
  BackButton,
  Container,
  Help,
  Section,
  SectionInner,
  Subtitle,
  Title,
} from '@/styled/pages/404'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <Container>
      <HeadComponent title="Not Found" />
      <Section>
        <SectionInner>
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
          <Help>
            The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </Help>
          <Link href={'/'} passHref>
            <BackButton>Back to Homepage</BackButton>
          </Link>
        </SectionInner>
      </Section>
    </Container>
  )
}

export default NotFoundPage
