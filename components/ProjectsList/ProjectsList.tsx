import styled from '@/styled/index'
import { IProject } from 'database/projects'
import { Skill } from 'database/skills'
import { motion, Variants } from 'framer-motion'
import 'lazysizes'
import moment from 'moment'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

interface ContainerProps {
  light: 1 | 0
}

const ListContainer = styled(motion.div)`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 20px;
  align-items: center;
  justify-items: center;
  column-gap: 20px;
  row-gap: 40px;
  margin: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Container = styled(motion.a)<ContainerProps>`
  border: 1px solid
    ${({ light }: ContainerProps) => (light ? '#2b2d42' : '#fff')};
  max-width: 400px;
  width: 100%;
  background: #0d0d12;
  overflow: hidden;

  &:hover .desc,
  &:active .desc,
  &:focus .desc {
    top: 0;
  }
`
const CardContainer = styled.div`
  padding-bottom: 48%;
  position: relative;
  overflow: hidden;
`
const Title = styled.p`
  margin: 0;
  padding: 0.6rem;
  font-size: 1.1em;
  color: white;
`
const Card = styled.img`
  width: 100%;
  height: auto;
  position: absolute;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
const CardDescriptionContainer = styled.div`
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  top: 100%;
  transition: top 0.4s ease-in-out;
`
const CardDescription = styled.p`
  flex-basis: 90%;
  margin: 0;
  padding: 1em;
  color: white;
  line-height: 1.2;
`
const CardSkills = styled.div`
  flex-basis: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.5);
  padding: 2%;
`
const CardSkill = styled.img`
  width: 100%;
  height: auto;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`

export interface Props {
  projects: IProject[]
  light?: boolean
}

const containerAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
  },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
    },
  },
}

const ProjectsList = ({ projects, light = false }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <ListContainer
      ref={ref}
      initial={'hidden'}
      animate={inView ? 'show' : 'hidden'}
      variants={containerAnimation}
    >
      {projects
        .sort((a, b) => moment(b.date).diff(moment(a.date)))
        .map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            passHref
            key={project.id}
          >
            <Container light={light ? 1 : 0} variants={fadeVariants}>
              <CardContainer>
                <Card
                  data-src={project.display[0].url}
                  alt={project.title}
                  className={'lazyload'}
                />
                <CardDescriptionContainer className={'desc'}>
                  <CardSkills>
                    {project.framework.slice(0, 4).map((framework) => {
                      const skill = Skill(framework)
                      return (
                        <CardSkill
                          data-src={skill.logo}
                          alt={skill.label}
                          key={framework}
                          className={'lazyload'}
                        />
                      )
                    })}
                  </CardSkills>
                  <CardDescription>{project.summary}</CardDescription>
                </CardDescriptionContainer>
              </CardContainer>
              <Title>{project.title}</Title>
            </Container>
          </Link>
        ))}
    </ListContainer>
  )
}

export default ProjectsList
