export interface ISkill {
  key: string
  label: string
  logo: string
}

const skills: ISkill[] = [
  {
    key: 'android',
    label: 'Android',
    logo: '/assets/images/skills/android.png',
  },
  {
    key: 'angular',
    label: 'Angular',
    logo: '/assets/images/skills/angular.png',
  },
  {
    key: 'apache',
    label: 'Apache',
    logo: '/assets/images/skills/apache.png',
  },
  {
    key: 'after-effect',
    label: 'Adobe After Effet',
    logo: '/assets/images/skills/after-effect.png',
  },
  {
    key: 'aws',
    label: 'AWS',
    logo: '/assets/images/skills/aws.png',
  },
  {
    key: 'c',
    label: 'C',
    logo: '/assets/images/skills/c.png',
  },
  {
    key: 'cplusplus',
    label: 'C++',
    logo: '/assets/images/skills/cplusplus.png',
  },
  {
    key: 'csharp',
    label: 'C#',
    logo: '/assets/images/skills/csharp.png',
  },
  {
    key: 'css',
    label: 'CSS',
    logo: '/assets/images/skills/css.png',
  },
  {
    key: 'dotnet',
    label: '.NET',
    logo: '/assets/images/skills/dotnet.png',
  },
  {
    key: 'drupal',
    label: 'Drupal',
    logo: '/assets/images/skills/drupal.png',
  },
  {
    key: 'eclipse',
    label: 'Eclipse',
    logo: '/assets/images/skills/eclipse.png',
  },
  {
    key: 'gcp',
    label: 'GCP',
    logo: '/assets/images/skills/gcp.png',
  },
  {
    key: 'github',
    label: 'Github',
    logo: '/assets/images/skills/github.png',
  },
  {
    key: 'html',
    label: 'HTML',
    logo: '/assets/images/skills/html.png',
  },
  {
    key: 'illustrator',
    label: 'Adobe Illustrator',
    logo: '/assets/images/skills/illustrator.png',
  },
  {
    key: 'indesign',
    label: 'Adobe Indesign',
    logo: '/assets/images/skills/indesign.png',
  },
  {
    key: 'java',
    label: 'Java',
    logo: '/assets/images/skills/java.png',
  },
  {
    key: 'javascript',
    label: 'Javascript',
    logo: '/assets/images/skills/javascript.png',
  },
  {
    key: 'jquery',
    label: 'jQuery',
    logo: '/assets/images/skills/jquery.png',
  },
  {
    key: 'laravel',
    label: 'Laravel',
    logo: '/assets/images/skills/laravel.png',
  },
  {
    key: 'mariadb',
    label: 'MariaDB',
    logo: '/assets/images/skills/mariadb.png',
  },
  {
    key: 'maya',
    label: 'Autodesk Maya',
    logo: '/assets/images/skills/maya.png',
  },
  {
    key: 'mongodb',
    label: 'MongoDB',
    logo: '/assets/images/skills/mongodb.png',
  },
  {
    key: 'mysql',
    label: 'MySQL',
    logo: '/assets/images/skills/mysql.png',
  },
  {
    key: 'nestjs',
    label: 'NestJS',
    logo: '/assets/images/skills/nestjs.png',
  },
  {
    key: 'nextjs',
    label: 'NextJS',
    logo: '/assets/images/skills/nextjs.png',
  },
  {
    key: 'nodejs',
    label: 'NodeJS',
    logo: '/assets/images/skills/nodejs.png',
  },
  {
    key: 'photoshop',
    label: 'Adobe Photoshop',
    logo: '/assets/images/skills/photoshop.png',
  },
  {
    key: 'php',
    label: 'PHP',
    logo: '/assets/images/skills/php.png',
  },
  {
    key: 'pycharm',
    label: 'Pycharm',
    logo: '/assets/images/skills/pycharm.png',
  },
  {
    key: 'python',
    label: 'Python',
    logo: '/assets/images/skills/python.png',
  },
  {
    key: 'react',
    label: 'React',
    logo: '/assets/images/skills/react.png',
  },
  {
    key: 'sqlite',
    label: 'SQLite',
    logo: '/assets/images/skills/sqlite.png',
  },
  {
    key: 'unity',
    label: 'Unity',
    logo: '/assets/images/skills/unity.png',
  },
  {
    key: 'visual-studio',
    label: 'Visual Studio',
    logo: '/assets/images/skills/visual-studio.png',
  },
  {
    key: 'wordpress',
    label: 'Wordpress',
    logo: '/assets/images/skills/wordpress.png',
  },
]

export const Skills = (key?: string): ISkill[] => {
  if (key) {
    return skills.filter((v) => v.key === key)
  } else {
    return skills
  }
}

export const Skill = (key: string): ISkill => {
  if (!key) return null

  return skills.find((v) => v.key === key)
}
