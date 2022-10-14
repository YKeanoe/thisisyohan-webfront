import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import GithubIcon from '@/components/Icons/GithubIcon'
import DisplayModal from '@/components/Modal/DisplayModal'
import {
  Banner,
  BannerDescription,
  BannerTitle,
  MainSection,
} from '@/styled/index'
import {
  Container,
  Display,
  DisplayContainer,
  DisplayDesc,
  DisplaysContainer,
  Framework,
  FrameworksContainer,
  GithubLink,
  MarkdownContainer,
  Section,
  SectionInner,
  Title,
  TitleContainer,
} from '@/styled/pages/projects'
import { IProject, Project, Projects } from 'database/projects'
import { Skill } from 'database/skills'
import 'lazysizes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = Projects()

  return {
    paths: projects.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string

  return {
    props: Project({ slug }),
  }
}

const ProjectDetail = (project: IProject) => {
  const [selectedDisplay, setSelectedDisplay] = useState<{
    url: string
    alt: string
    index: number
  }>(null)
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    setShowBanner(true)
  }, [])

  if (!project) {
    return <Error statusCode={404} />
  }

  const metatags: HeadProps['metatags'] = [
    // General metatags
    {
      name: 'description',
      content: project.summary,
    },
    // Facebook metatags
    {
      property: 'og:url',
      content: `https://thisisyohan.com/projects/${project.slug}`,
    },
    {
      property: 'og:description',
      content: project.summary,
    },
    // Twitter meta tags
    {
      name: 'twitter:description',
      content: project.summary,
    },
    {
      name: 'twitter:url',
      content: `https://thisisyohan.com/projects/${project.slug}`,
    },
  ]

  const handleDisplayClick = (
    display: { url: string; alt: string },
    index: number
  ) => {
    setSelectedDisplay({ ...display, index })
  }

  const handleNext = () => {
    if (!selectedDisplay) return

    const newIndex = selectedDisplay.index + 1
    if (newIndex >= project.display.length) {
      setSelectedDisplay({ ...project.display[0], index: 0 })
    } else {
      setSelectedDisplay({ ...project.display[newIndex], index: newIndex })
    }
  }

  const handlePrevious = () => {
    if (!selectedDisplay) return

    let newIndex = selectedDisplay.index - 1
    if (newIndex < 0) newIndex = project.display.length - 1

    setSelectedDisplay({ ...project.display[newIndex], index: newIndex })
  }

  return (
    <Container>
      <HeadComponent title={project.title} metatags={metatags} />

      <MainSection>
        <Banner show={showBanner}>
          <BannerTitle>{project.title}</BannerTitle>
          <BannerDescription>Yohanes Keanoe</BannerDescription>
        </Banner>
      </MainSection>

      <Section>
        <SectionInner>
          <TitleContainer>
            <Title>
              {project.github && (
                <Link href={project.github} passHref>
                  <GithubLink>
                    <GithubIcon isRound />
                  </GithubLink>
                </Link>
              )}
              {project.title}
            </Title>
            <FrameworksContainer>
              {project.framework.map((framework) => {
                const { key, label, logo } = Skill(framework)
                return (
                  <Link key={key} href={`/skills/${framework}`} passHref>
                    <a>
                      <Framework
                        data-src={logo}
                        alt={label}
                        className={'lazyload'}
                      />
                    </a>
                  </Link>
                )
              })}
            </FrameworksContainer>
          </TitleContainer>

          <MarkdownContainer>
            <ReactMarkdown>{project.description}</ReactMarkdown>
          </MarkdownContainer>

          {project.display.length > 0 && (
            <DisplaysContainer>
              {project.display.map((display, i) => (
                <DisplayContainer
                  key={i}
                  onClick={() => handleDisplayClick(display, i)}
                >
                  <Display
                    data-src={display.url}
                    alt={display.alt}
                    className={'lazyload'}
                  />
                  <DisplayDesc>{display.alt}</DisplayDesc>
                </DisplayContainer>
              ))}
            </DisplaysContainer>
          )}
        </SectionInner>
      </Section>

      <DisplayModal
        isOpen={!!selectedDisplay}
        onRequestClose={() => setSelectedDisplay(null)}
        selectedDisplay={selectedDisplay}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </Container>
  )
}

export default ProjectDetail
