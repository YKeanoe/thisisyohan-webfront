interface SkillsProps {
  key?: string
}

interface ISkill {
  key: string
  label: string
  logo: string
}

const Skills = ({ key }: SkillsProps) => {
  const skills: ISkill[] = [
    {
      key: 'mongodb',
      label: 'MongoDB',
      logo: 'assets/images/skills/mongodb.png',
    },
  ]

  if (key) {
    return skills.find((v) => v.key === key)
  } else {
    return skills
  }
}

export default Skills
