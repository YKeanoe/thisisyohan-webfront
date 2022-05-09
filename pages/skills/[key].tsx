import HeadComponent, { Props as HeadProps } from '@/components/Head/Head'
import ProjectsList from '@/components/ProjectsList/ProjectsList'
import {
  Banner,
  BannerDescription,
  BannerTitle,
  MainSection,
} from '@/styled/index'
import {
  Container,
  Section,
  SectionInner,
  SkillIcon,
  Title,
} from '@/styled/pages/skills'
import { IProject, Projects } from 'database/projects'
import { ISkill, Skill, Skills } from 'database/skills'
import 'lazysizes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import { useEffect, useState } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const skills = Skills()

  return {
    paths: skills.map(({ key }) => ({
      params: {
        key,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const key = params.key as string
  const skill = Skill(key)

  return {
    props: {
      projects: Projects(key),
      skill,
    },
  }
}

interface SkillListProps {
  projects: IProject[]
  skill: ISkill
}

const ProjectDetail = ({ projects, skill }: SkillListProps) => {
  if (!skill) {
    return <Error statusCode={404} />
  }

  if (!projects || projects.length < 0) {
    return <Error statusCode={404} />
  }

  const [showBanner, setShowBanner] = useState(false)

  const description = `List of Yohanes' projects using ${skill.label}`

  const metatags: HeadProps['metatags'] = [
    // General metatags
    {
      name: 'description',
      content: description,
    },
    // Facebook metatags
    {
      property: 'og:url',
      content: `https://thisisyohan.com/skills/${skill.key}`,
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
      content: `https://thisisyohan.com/skills/${skill.key}`,
    },
  ]

  useEffect(() => {
    setShowBanner(true)
  }, [])

  return (
    <Container>
      <HeadComponent title={skill.label} metatags={metatags} />

      <MainSection>
        <Banner show={showBanner}>
          <BannerTitle>{skill.label}</BannerTitle>
          <BannerDescription>Yohanes Keanoe</BannerDescription>
        </Banner>
      </MainSection>

      <Section>
        <SectionInner>
          <Title>
            <SkillIcon
              data-src={skill.logo}
              alt={skill.label}
              className={'lazyload'}
            />
            {skill.label}
          </Title>

          <ProjectsList projects={projects} light />
        </SectionInner>
      </Section>
    </Container>
  )
}

export default ProjectDetail
