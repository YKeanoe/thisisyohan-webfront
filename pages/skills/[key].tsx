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
import { Variants } from 'framer-motion'
import 'lazysizes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Error from 'next/error'
import { useInView } from 'react-intersection-observer'

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

const ProjectDetail = ({ projects, skill }: SkillListProps) => {
  const [mainRef, mainInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  if (!skill) {
    return <Error statusCode={404} />
  }

  if (!projects || projects.length < 0) {
    return <Error statusCode={404} />
  }

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

  return (
    <Container>
      <HeadComponent title={skill.label} metatags={metatags} />

      <MainSection ref={mainRef}>
        <Banner
          initial={'hidden'}
          animate={mainInView ? 'show' : 'hidden'}
          variants={bannerAnimation}
        >
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
