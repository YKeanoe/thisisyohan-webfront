import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import GithubIcon from '@/components/Icons/GithubIcon'
import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import MailIcon from '@/components/Icons/MailIcon'
import {
  Contact,
  ContactContainer,
  ContactInnerContainer,
  ContactWrapper,
  Container,
  Intro,
  IntroContainer,
  IntroInnerContainer,
} from '@/styled/pages'
import { Section } from '@/styled/shared'
import { Projects } from 'database/projects'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import {
  Banner,
  BannerDescription,
  BannerTitle,
  MainSection,
} from '../styled'

const SkillsSection = dynamic(
  () => import('@/components/SkillsSection/SkillsSection')
)
const GithubActivity = dynamic(
  () => import('@/components/GithubActivity/GithubActivity')
)
const ProjectsList = dynamic(
  () => import('@/components/ProjectsList/ProjectsList')
)

const Home = () => {
  const description =
    'A full-stack web developer with over 5 years of experience across languages and frameworks, from back-end to front-end.'

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
      <HeadComponent title="Yohanes Keanoe" metatags={metatags} />

      <MainSection>
        <Banner>
          <BannerTitle style={{ textTransform: 'uppercase' }}>
            Yohanes Keanoe
          </BannerTitle>
          <BannerDescription>Full Stack Web Developer</BannerDescription>
        </Banner>
      </MainSection>

      <Section>
        <IntroContainer>
          <IntroInnerContainer>
            <Intro>
              Hi, I&apos;m Yohanes, a full-stack web developer based in
              Jakarta. For over 5 years I&apos;ve been designing and shipping
              software across the stack — games, websites, databases, and
              applications. I work from cloud infrastructure and APIs through
              to the interfaces people actually use, picking the language and
              framework that fit the problem. Whether you need a back-end, a
              front-end, or the whole product from idea to launch, I can help
              you build it.
            </Intro>
          </IntroInnerContainer>
        </IntroContainer>
      </Section>

      <Section style={{ maxWidth: '1000px', paddingBottom: '40px' }}>
        <SkillsSection />
      </Section>

      <Section style={{ maxWidth: '1000px' }}>
        <GithubActivity />
      </Section>

      <Section id="contact">
        <ContactContainer>
          <ContactInnerContainer>
            <ContactWrapper>
              <Link href={'mailto:keanuraharjo@hotmail.com'} passHref>
                <Contact>
                  <MailIcon />
                  <p>keanuraharjo@hotmail.com</p>
                </Contact>
              </Link>
              <Link href={'https://www.linkedin.com/in/ykeanoe/'} passHref>
                <Contact>
                  <LinkedinIcon />
                  <p>YKeanoe</p>
                </Contact>
              </Link>
              <Link href={'https://github.com/YKeanoe'} passHref>
                <Contact>
                  <GithubIcon />
                  <p>YKeanoe</p>
                </Contact>
              </Link>
            </ContactWrapper>
          </ContactInnerContainer>
        </ContactContainer>
      </Section>

      <Section style={{ paddingBottom: '40px' }}>
        <ProjectsList projects={Projects()} />
      </Section>
    </Container>
  )
}

export default Home
