import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import { Banner, BannerDescription, BannerTitle, Container, Intro, IntroContainer, IntroInnerContainer } from '@/styled/pages'
import { MainSection } from '@/styled/pages/index'
import { Section } from '@/styled/shared'

const Home = () => {
  const description = 'A Full Stack Web Developer with more than 4 years experiences on multiple languages and frameworks from back to front end.'

  const metatags: HeadProps['metatags'] = [
    // General metatags
    {
      name: 'description',
      content: description,
    },
    // Facebook metatags
    {
      property: 'og:url',
      content: 'https://thisisyohan.com/',
    },
    {
      property: 'og:description',
      content: description,
    },
    // Twitter meta tags
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:url',
      content: 'https://thisisyohan.com/',
    },
  ]

  return (
    <Container>
      <HeadComponent
        title="Yohanes Keanoe"
        metatags={metatags}
      />

      <MainSection>
        <Banner>
          <BannerTitle>
            Yohanes Keanoe
          </BannerTitle>
          <BannerDescription>
            Full Stack Web Developer
          </BannerDescription>
        </Banner>
      </MainSection>

      <Section>
        <IntroContainer>
          <IntroInnerContainer>
            <Intro>
              Hi, my name is Yohanes and I am a full-stack web developer. I have been developing softwares for 4 years ranging from games, websites, databases, and applications. From cloud server to back-end to front-end, you can take your pick.
            </Intro>
          </IntroInnerContainer>
        </IntroContainer>
      </Section>
    </Container>
  )
}

export default Home
