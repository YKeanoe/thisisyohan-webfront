import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import GithubIcon from '@/components/Icons/GithubIcon'
import LinkedinIcon from '@/components/Icons/LinkedinIcon'
import MailIcon from '@/components/Icons/MailIcon'
import ProjectsList from '@/components/ProjectsList/ProjectsList'
import SkillsSection from '@/components/SkillsSection/SkillsSection'
import {
  Contact,
  ContactContainer,
  ContactInnerContainer,
  ContactWrapper,
  Container,
  GithubCalendar,
  GithubCalendarContainer,
  GithubCalendarInnerContainer,
  GithubContainer,
  GithubFailed,
  GithubMonths,
  GithubSquare,
  GithubSquares,
  GithubTotal,
  GithubTotalContainer,
  GithubTotalHeader,
  Intro,
  IntroContainer,
  IntroInnerContainer,
} from '@/styled/pages'
import { Section, SectionTitle } from '@/styled/shared'
import { getGithubDataLevel } from '@/utils/misc'
import Tippy from '@tippyjs/react'
import { useGithubContributions } from 'data/useGithubContributions'
import { Projects } from 'database/projects'
import { Variants } from 'framer-motion'
import 'lazysizes'
import moment from 'moment'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { SpinnerDiamond } from 'spinners-react'
import 'tippy.js/dist/tippy.css'
import {
  Banner,
  BannerDescription,
  BannerTitle,
  MainSection,
} from '../styled'

const bannerAnimation: Variants = {
  hidden: {
    height: 0,
    padding: 0,
    width: 0,
    opacity: 0,
    background: '#000',
  },
  show: {
    height: [0, 4, 4, 300],
    padding: [0, 0, 0, 20],
    width: ['0%', '100%', '100%', '100%'],
    opacity: 1,
    background: '#11111d',
    transition: {
      duration: 1,
    },
  },
}

const Home = () => {
  const description =
    'A Full Stack Web Developer with more than 4 years experiences on multiple languages and frameworks from back to front end.'

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

  const [squares, setSquares] = useState<
    { date: Date; contribution: number; level: number }[]
  >([])
  const [months, setMonths] = useState<{ label: string; weeks: number }[]>(
    []
  )
  const [mainRef, mainInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  const {
    data: githubs,
    loading: githubLoading,
    error: githubError,
  } = useGithubContributions()

  useEffect(() => {
    if (githubLoading || !githubs) return

    // Map github data to squares
    const squares: { date: Date; contribution: number; level: number }[] =
      githubs.user.contributionsCollection.contributionCalendar.weeks.reduce(
        (
          acc: { date: Date; contribution: number; level: number }[],
          curr
        ) => {
          const datas = curr.contributionDays.map((day) => ({
            date: new Date(day.date),
            contribution: day.contributionCount,
            level: getGithubDataLevel(day.color),
          }))

          acc.push(...datas)

          return acc
        },
        []
      )

    // Make squares multiple of 7
    if (squares.length > 357) {
      squares.splice(0, squares.length - 357)
    }

    // Get months data
    const tempMonths: { label: string; days: number }[] = squares.reduce(
      (acc, curr) => {
        const label = moment(curr.date).format('MMM')
        const month = acc.find((v) => v.label === label)

        if (month) {
          month.days++
        } else {
          acc.push({ label, days: 1 })
        }

        return acc
      },
      []
    )

    // Convert months to
    const months = []
    let leftoverDays = 0

    tempMonths.forEach(({ label, days }) => {
      months.push({
        label,
        weeks:
          leftoverDays > 2
            ? Math.round((leftoverDays + days) / 7)
            : Math.floor(days / 7),
      })

      if ((days + leftoverDays) % 7 !== 0) {
        leftoverDays = days % 7
      } else {
        leftoverDays = 0
      }
    })

    setSquares(squares)
    setMonths(months)
  }, [githubs, githubLoading])

  return (
    <Container>
      <HeadComponent title="Yohanes Keanoe" metatags={metatags} />

      <MainSection ref={mainRef}>
        <Banner
          initial={'hidden'}
          animate={mainInView ? 'show' : 'hidden'}
          variants={bannerAnimation}
        >
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
              Hi, my name is Yohanes and I am a full-stack web developer. I
              have been developing softwares for 4 years ranging from
              games, websites, databases, and applications. From cloud
              server to back-end to front-end, you can take your pick.
            </Intro>
          </IntroInnerContainer>
        </IntroContainer>
      </Section>

      <Section style={{ maxWidth: '1000px', paddingBottom: '40px' }}>
        <SkillsSection />
      </Section>

      <Section style={{ maxWidth: '1000px' }}>
        <GithubContainer>
          <SectionTitle>Github Activity</SectionTitle>
          {githubLoading && <SpinnerDiamond size={100} color={'red'} />}

          {githubs && (
            <>
              <GithubCalendar>
                <GithubCalendarContainer>
                  <GithubCalendarInnerContainer>
                    <GithubMonths totalWeeks={months.map((v) => v.weeks)}>
                      {months.map((v) => (
                        <li key={v.label}>{v.label}</li>
                      ))}
                    </GithubMonths>
                    <GithubSquares>
                      {squares.map((square) => (
                        <Tippy
                          content={
                            <span>
                              <strong>
                                {square.contribution} contributions on
                              </strong>{' '}
                              {moment(square.date).format('MMMM DD, YYYY')}
                            </span>
                          }
                          key={square.date.toString()}
                        >
                          <GithubSquare dataLevel={square.level} />
                        </Tippy>
                      ))}
                    </GithubSquares>
                  </GithubCalendarInnerContainer>
                </GithubCalendarContainer>
              </GithubCalendar>
              <GithubTotalContainer>
                <GithubTotalHeader>Total Contributions</GithubTotalHeader>
                <GithubTotal>
                  {
                    githubs.user.contributionsCollection
                      .contributionCalendar.totalContributions
                  }{' '}
                  Total
                </GithubTotal>
              </GithubTotalContainer>
            </>
          )}

          {githubError && (
            <GithubFailed>
              Github activity unavailable
              <br />
              {githubError}
            </GithubFailed>
          )}
        </GithubContainer>
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
