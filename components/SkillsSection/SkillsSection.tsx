import styled from '@/styled/index'
import { SectionTitle } from '@/styled/shared'
import { Skills } from 'database/skills'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import SkillSearchForm from '../Forms/SkillSearchForm/SkillSearchForm'

const SkillsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SkillIconsContainer = styled.div`
  display: flex;
  --s: 100px;
  --m: 6px;
  --f: calc(1.732 * var(--s) + 4 * var(--m) - 1px);
  padding: 0 20px calc(var(--s) * 3 + 40px);
  width: calc(var(--s) * 3);
  transition: all 0.4s ease-in-out;

  @media (min-width: 400px) {
    padding: 0 20px calc(var(--s) * 0.25 + 40px);
    width: calc(var(--s) * 4);
  }

  @media (min-width: 500px) {
    width: calc(var(--s) * 5);
  }

  @media (min-width: 600px) {
    width: calc(var(--s) * 6);
  }

  @media (min-width: 700px) {
    width: calc(var(--s) * 7);
  }

  @media (min-width: 800px) {
    width: calc(var(--s) * 8);
  }

  @media (min-width: 900px) {
    width: calc(var(--s) * 9);
  }

  @media (min-width: 1000px) {
    width: calc(var(--s) * 10);
  }
`
const SkillIconsInnerContainer = styled(motion.div)`
  font-size: 0;
  padding-left: 15px;

  &:before {
    content: '';
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 140%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(var(--f) - 3px),
      #000 0 var(--f)
    );

    @media (min-width: 400px) {
      height: 120%;
    }
  }
`
const SkillContainer = styled(motion.a)`
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547);
  display: inline-block;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: white;
  margin-bottom: calc(var(--m) - var(--s) * 0.2885);
  position: relative;
  cursor: pointer;

  &:hover p,
  &:active p,
  &:focus p {
    opacity: 1;
  }
`
const SkillInnerContainer = styled.div`
  background: #20202c;
  position: absolute;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  padding: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
`
const SkillLogo = styled.img`
  max-width: 80%;
  max-height: 80%;
  width: 100px;

  &.lazyload {
    opacity: 0;
  }

  &.lazyloading {
    opacity: 1;
    transition: opacity 300ms;
    background: url('/assets/images/loader.gif') no-repeat center;
  }
`
const SkillLabel = styled.p`
  color: white;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 0.5em;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
`

const containerAnimation: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  const [skills, setSkills] = useState(Skills(null))

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

  return (
    <SkillsContainer ref={ref}>
      <SectionTitle>Skills</SectionTitle>
      <SkillSearchForm
        skills={skills}
        onSubmit={handleOnSkillSubmit}
        onChange={handleOnSkillChange}
      />

      <SkillIconsContainer>
        <SkillIconsInnerContainer
          initial={'hidden'}
          animate={inView ? 'show' : 'hidden'}
          variants={containerAnimation}
        >
          {skills.length > 0 &&
            skills.map(({ key, label, logo }) => (
              <Link href={`/skills/${key}`} passHref key={key}>
                <SkillContainer variants={fadeVariants}>
                  <SkillInnerContainer>
                    <SkillLabel>{label}</SkillLabel>
                    <SkillLogo
                      data-src={logo}
                      alt={label}
                      className={'lazyload'}
                    />
                  </SkillInnerContainer>
                </SkillContainer>
              </Link>
            ))}
        </SkillIconsInnerContainer>
      </SkillIconsContainer>
    </SkillsContainer>
  )
}

export default SkillsSection
