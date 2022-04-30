import SkillSearchForm from '@/components/Forms/SkillSearchForm/SkillSearchForm'
import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import {
  Banner,
  BannerDescription,
  BannerTitle,
  Container,
  GithubContainer,
  GithubDays,
  GithubInnerContainer,
  GithubMonths,
  GithubSquare,
  GithubSquares,
  GithubWrapper,
  Intro,
  IntroContainer,
  IntroInnerContainer,
  SkillContainer,
  SkillIconsContainer,
  SkillIconsInnerContainer,
  SkillInnerContainer,
  SkillLabel,
  SkillLogo,
  SkillsContainer,
} from '@/styled/pages'
import { MainSection } from '@/styled/pages/index'
import { Section, SectionTitle } from '@/styled/shared'
import { dummyGithub } from '@/utils/dummyGithub'
import { getDaysInYear, getGithubDataLevel } from '@/utils/misc'
import { useGithubContributions } from 'data/useGithubContributions'
import Skills from 'database/skills'
import 'lazysizes'
import { useEffect, useState } from 'react'

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

  const [skills, setSkills] = useState(Skills(null))
  const [squares, setSquares] = useState([])

  // const { data: githubs, loading: githubLoading, error: githubError } = useGithubContributions()

  const handleOnSkillSubmit = ({ skill }) => {
    handleOnSkillChange(skill)
  }

  const handleOnSkillChange = (values) => {
    if (values) {
      setSkills(Skills(values.value))
    } else {
      setSkills(Skills(null))
    }
  }

  // useEffect(() => {
  //   console.log('githubLoading', githubLoading)
  //   console.log('githubs', githubs)
  //   console.log('githubError', githubError)
  // }, [githubs, githubLoading, githubError])

  useEffect(() => {
    // if(githubLoading || !githubs) return;

    const githubs = dummyGithub

    console.log(githubs)

    const squares =
      githubs.user.contributionsCollection.contributionCalendar.weeks.reduce(
        (acc, curr) => {
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

    if (squares.length > 357) {
      squares.splice(0, squares.length - 357)
    }

    console.log(squares)

    setSquares(squares)
  }, [])
  // }, [githubs, githubLoading])

  return (
    <Container>
      <HeadComponent title="Yohanes Keanoe" metatags={metatags} />

      <MainSection>
        <Banner>
          <BannerTitle>Yohanes Keanoe</BannerTitle>
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
        <SkillsContainer>
          <SectionTitle>Skills</SectionTitle>
          <SkillSearchForm
            skills={skills}
            onSubmit={handleOnSkillSubmit}
            onChange={handleOnSkillChange}
          />

          <SkillIconsContainer>
            <SkillIconsInnerContainer>
              {skills.length > 0 &&
                skills.map(({ key, label, logo }) => (
                  <SkillContainer key={key}>
                    <SkillInnerContainer>
                      <SkillLabel>{label}</SkillLabel>
                      <SkillLogo
                        data-src={logo}
                        alt={label}
                        className={'lazyload'}
                      />
                    </SkillInnerContainer>
                  </SkillContainer>
                ))}
            </SkillIconsInnerContainer>
          </SkillIconsContainer>
        </SkillsContainer>
      </Section>

      <Section style={{ maxWidth: '1000px' }}>
        <GithubContainer>
          <GithubInnerContainer>
            <GithubWrapper>
              <GithubMonths>
                <li>Jan</li>
                <li>Feb</li>
                <li>Mar</li>
                <li>Apr</li>
                <li>May</li>
                <li>Jun</li>
                <li>Jul</li>
                <li>Aug</li>
                <li>Sep</li>
                <li>Oct</li>
                <li>Nov</li>
                <li>Dec</li>
              </GithubMonths>
              <GithubDays>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
              </GithubDays>
              <GithubSquares>
                {squares.map(
                  (square) => (
                    <GithubSquare />
                  )
                  // <li data-level="${level}"></li>
                )}
              </GithubSquares>
            </GithubWrapper>
          </GithubInnerContainer>
        </GithubContainer>
      </Section>
    </Container>
  )
}

export default Home
