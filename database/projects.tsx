import { ISkill } from "./skills"

export interface IProject {
  id: number,
  slug: string
  title: string
  description: string
  summary: string
  date: string
  framework: ISkill['key'][]
  display: {url: string, alt: string}[]
  github?: string
}

interface ProjectsQuery {
  id?: number
  slug?: string
  framework?: ISkill['key']
}

export const Projects = ({id, slug, framework}: ProjectsQuery): IProject | IProject[] => {
  const projects: IProject[] = [
    {
      id: 1,
      slug: 'revolution',
      title: 'Revolution',
      github: '',
      description: `
        Third year project for RMIT Interactive Digital Media Project A. The project gave us a creative control to develop any type of game in any platform. We decided to create a 2.5D RPG fighting game for windows pc. The project was done in unity with assets created in Photoshop or Maya, animated in Flash, and then programmed in Javascript or C#. The game is delivered with a fully playable first level. The game feature include variety of enemies to defeat using 3 types of playable character.

        In this project, I was assigned to develop the code for the game, enemies design, and both enemies and characters animations.
      `,
      summary: 'Third year project for RMIT Interactive Digital Media Project A. The project gave us a creative control to develop any type of game in any platform. We decided to create a 2.5D RPG fighting game for windows pc.',
      date: '2014-06-15',
      framework: ['unity', 'javascript', 'csharp', 'maya', 'photoshop'],
      display: [
        {
          url: 'assets/images/projects/revolution-1.png',
          alt: 'Warrior'
        },
        {
          url: 'assets/images/projects/revolution-2.png',
          alt: 'Archer'
        },
        {
          url: 'assets/images/projects/revolution-3.png',
          alt: 'Mage'
        },
        {
          url: 'assets/images/projects/revolution-4.png',
          alt: 'Fight System'
        },
        {
          url: 'assets/images/projects/revolution-5.gif',
          alt: 'Fight Animation'
        },
        {
          url: 'assets/images/projects/revolution-6.gif',
          alt: 'Walk Animation'
        },
        {
          url: 'assets/images/projects/revolution-7.jpeg',
          alt: 'NPC Design'
        },
        {
          url: 'assets/images/projects/revolution-8.jpeg',
          alt: 'Character Design'
        },
      ]
    },
    {
      id: 2,
      slug: 'silverado',
      title: 'Silverado',
      github: 'https://github.com/YKeanoe/silverado-page',
      description: `
        First year project for RMIT Web Programming required to develop a website for 'silverado', a movie theater. Using php, the website is able to grab the data from another server's API and display it. The website will then be able to calculate the prices and post a form to the server for a check and verify. The site is also include shopping cart and session system. Unfortunately, RMIT's server for the data/API is no longer available, hence the green screen.
      `,
      summary: 'First year project for RMIT Web Programming required to develop a website for \'silverado\', a movie theater. Using php, the website is able to grab the data from another server\'s API and display it.',
      date: '2015-03-15',
      framework: ['html', 'css', 'php', 'javascript'],
      display: [
        {
          url: 'assets/images/projects/silverado-1.png',
          alt: 'Book a Ticket'
        },
        {
          url: 'assets/images/projects/silverado-2.png',
          alt: 'Homepage'
        },
      ]
    },
    {
      id: 3,
      slug: 'multithread-craps-game',
      title: 'Multithread Craps Game',
      github: 'https://github.com/YKeanoe/craps-game',
      description: `
        Second year project for RMIT Software Architecture Design and Implementation. In this project, we are required to develop a multiplayer application for craps game. Using threads and socket, the application is able to connect more than one instances of clients and each clients are able to add themself into the game and play.
      `,
      summary: 'Second year project for RMIT Software Architecture Design and Implementation. In this project, we are required to develop a multiplayer application for craps game.',
      date: '2016-03-15',
      framework: ['eclipse', 'java'],
      display: [
        {
          url: 'assets/images/projects/craps-1.gif',
          alt: 'Add Player'
        },
        {
          url: 'assets/images/projects/craps-2.gif',
          alt: 'Make Bet'
        },
        {
          url: 'assets/images/projects/craps-3.gif',
          alt: 'Roll'
        },
      ]
    },
    {
      id: 4,
      slug: 'maze-algorithm',
      title: 'Maze Algorithm',
      github: 'https://github.com/YKeanoe/maze_algorithm',
      description: `
        Second year project for RMIT Algorithm and Analysis. The project is to implement maze generation and solver algorithm.
        The project has 3 types of mazes:

        * Normal maze
        * Hexagon maze
        * Tunnel maze

        The project has 3 maze generator algorithm:

        * Kruskal's Algorithm
        * Prim's Algorithm
        * Recursive Backtracking Algorithm

        The project has 2 maze solver algorithm:

        * Recursive Backtracking Algorithm
        * Bidirectional Breadth-First-Search Algorithm
      `,
      summary: 'Second year project for RMIT Algorithm and Analysis. The project is to implement maze generation and solver algorithm.',
      date: '2016-04-15',
      framework: ['eclipse', 'java'],
      display: [
        {
          url: 'assets/images/projects/maze-1.gif',
          alt: 'Recursive Backtracking Maze Solver Algorithm'
        },
        {
          url: 'assets/images/projects/maze-2.png',
          alt: 'Hexagon Maze'
        },
        {
          url: 'assets/images/projects/maze-3.png',
          alt: 'Tunnel Mazze'
        },
        {
          url: 'assets/images/projects/maze-4.gif',
          alt: 'Bidirectional Breadth-First-Search Maze Solver Algorithm'
        },
        {
          url: 'assets/images/projects/maze-5.png',
          alt: 'Normal Maze'
        },
        {
          url: 'assets/images/projects/maze-6.png',
          alt: 'Prim\'s Algorithm Maze Generation Algorithm'
        },
        {
          url: 'assets/images/projects/maze-7.png',
          alt: 'Recursive Backtracking Maze Generation Algorithm'
        },
        {
          url: 'assets/images/projects/maze-8.png',
          alt: 'Kruskal\'s Maze Generation Algorithm'
        },
      ]
    },
    {
      id: 5,
      slug: 'uc-berkeley-pacman',
      title: 'UC Berkeley Pacman AI',
      github: 'https://github.com/YKeanoe/AIpacman',
      description: `
        Third year project for RMIT Artificial Intelegent course. The project follows UC Berkeley Pacman Project from project 1 to 3. The project require us to implement search algorithm, AI algorithm, and agent-based machine learning.

        The list of algorithms implemented here are:

        * Depth First Search Pathfinding
        * Breadth First Search Pathfinding
        * Uniform Cost Search Pathfinding
        * A-Star Search Pathfinding
        * Heuristic Value
        * Minimax Algorithm Agent
        * Alpha-Beta Algorithm Agent
        * Expectiminimax Algorithm Agent
        * Value Iteration Algorithm
        * Q-Learning Algorithm
        * Epsilon Greedy Algorithm
        * Approximate Q-Learning Algorithm
      `,
      summary: 'Third year project for RMIT Artificial Intelegent course. The project follows UC Berkeley Pacman Project from project 1 to 3. The project require us to implement search algorithm, AI algorithm, and agent-based machine learning.',
      date: '2017-04-15',
      framework: ['pycharm', 'python'],
      display: [
        {
          url: 'assets/images/projects/pacman-1.gif',
          alt: 'Minimax'
        },
        {
          url: 'assets/images/projects/pacman-2.gif',
          alt: 'Expectiminimax'
        },
        {
          url: 'assets/images/projects/pacman-3.gif',
          alt: 'Alpha-Beta'
        },
        {
          url: 'assets/images/projects/pacman-4.gif',
          alt: 'Breadth First Search'
        },
        {
          url: 'assets/images/projects/pacman-5.gif',
          alt: 'Depth First Search'
        },
        {
          url: 'assets/images/projects/pacman-6.gif',
          alt: 'Uniform Cost Search'
        },
        {
          url: 'assets/images/projects/pacman-7.gif',
          alt: 'A Star Search'
        },
      ]
    },
  ]

  if (framework) {
    return projects.filter((v) => v.framework.some(v => v === framework))
  } else if (id) {
    return projects.find(v => v.id === id)
  } else if (slug) {
    return projects.find(v => v.slug === slug)
  } else {
    return projects
  }
}