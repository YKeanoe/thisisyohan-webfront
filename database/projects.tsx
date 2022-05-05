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
    {
      id: 6,
      slug: 'ace-rental-web-application',
      title: 'Ace Rental Web Application',
      github: 'https://github.com/YKeanoe/car-sharing-system',
      description: `
        Third year assignment from RMIT to develop a web application for a company running a car sharing scheme. The company owns a number of cars which can be parked at a number of locations in the city. Users of the scheme will take a car for some period of time, use it and then return it to an empty location.

        The system needs to provide the necessary transactions and data management to support this kind of business. The system features include databases for users, cars, bookings, and running cars, filtering features to find the best cars to rent, making reports for both cars and users history, and platform independent. The system delivered include a server, web application, cloud database, and documentations.

        My role in the project is as both Back-end and Front-end developer. Making sure the web application and dashboard features/UI work properly.
      `,
      summary: 'Third year assignment from RMIT to develop a web application for a company running a car sharing scheme. The company owns a number of cars which can be parked at a number of locations in the city.',
      date: '2017-08-15',
      framework: ['visual-studio', 'dotnet', 'csharp', 'javascript', 'html', 'css'],
      display: [
        {
          url: 'assets/images/projects/ace-1.gif',
          alt: 'Frontpage'
        },
        {
          url: 'assets/images/projects/ace-2.gif',
          alt: 'Dashboard'
        },
        {
          url: 'assets/images/projects/ace-3.gif',
          alt: 'Filter'
        },
        {
          url: 'assets/images/projects/ace-4.png',
          alt: 'Car Filter'
        },
        {
          url: 'assets/images/projects/ace-5.png',
          alt: 'Mobile Booking Page'
        },
        {
          url: 'assets/images/projects/ace-6.png',
          alt: 'Mobile Dashboard Page'
        },
      ]
    },
    {
      id: 7,
      slug: 'jerry-aurum-website',
      title: 'Jerry Aurum Website',
      github: '',
      description: `
        A freelance task by Kamarupa Graphic Design and Branding Agency. The project requires a fully functional website for a photographer with its own Content Management System (CMS). The delivered products are the website with all the required features, a server to run the site, and a database for all the images and data. All the images used in the website is Jerry Aurum's own photograph and the design of the page, with the exception of the CMS page, is Kamarupa's design.

        List of the website features include editable content, slideshows, filterable portfolios, infinite scrolling page, responsive website.
      `,
      summary: 'A freelance task by Kamarupa Graphic Design and Branding Agency. The project requires a fully functional website for a photographer with its own Content Management System (CMS).',
      date: '2018-04-15',
      framework: ['javascript', 'css', 'php', 'mysql', 'aws', 'apache', 'html'],
      display: [
        {
          url: 'assets/images/projects/jerry-1.png',
          alt: 'Frontpage'
        },
        {
          url: 'assets/images/projects/jerry-2.png',
          alt: 'Portfolio Page 1'
        },
        {
          url: 'assets/images/projects/jerry-3.png',
          alt: 'Portfolio Page 2'
        },
        {
          url: 'assets/images/projects/jerry-4.png',
          alt: 'Admin Page'
        },
        {
          url: 'assets/images/projects/jerry-5.png',
          alt: 'Edit Slideshow Page 1'
        },
        {
          url: 'assets/images/projects/jerry-6.png',
          alt: 'Edit Portfolio Page 2'
        },
        {
          url: 'assets/images/projects/jerry-7.png',
          alt: 'Edit Slideshow Page'
        },
        {
          url: 'assets/images/projects/jerry-8.gif',
          alt: 'Portfolio Page Features 1'
        },
        {
          url: 'assets/images/projects/jerry-9.gif',
          alt: 'Portfolio Page Features 2'
        },
      ]
    },
    {
      id: 8,
      slug: 'cadmus-essay-page',
      title: 'Cadmus Essay Page',
      github: '',
      description: `
        A task given by Cadmus to create a front-end client for students to write essays. The project came with the react structure but most of the features in the page are written by myself. List of features created include server functionality using nodeJS in Amazon Linux server, database functionality using mongoDB, rich-text editor, auto save and load, and reactive loading. The task is similar to google drive's document where the page will load a certain student's work and multiple students may edit the work concurrently. The database is used to store the essay, instruction, and notes in JSON format for Slate rich text editor compability.
      `,
      summary: 'A task given by Cadmus to create a front-end client for students to write essays. The project came with the react structure but most of the features in the page are written by myself.',
      date: '2018-06-15',
      framework: ['javascript', 'css', 'html', 'react', 'nodejs', 'mongodb'],
      display: [
        {
          url: 'assets/images/projects/cadmus-1.png',
          alt: 'Instruction Tab'
        },
        {
          url: 'assets/images/projects/cadmus-2.png',
          alt: 'Note Tab'
        },
        {
          url: 'assets/images/projects/cadmus-3.gif',
          alt: 'Reactive Tab'
        },
        {
          url: 'assets/images/projects/cadmus-4.gif',
          alt: 'Navigation Tab'
        },
        {
          url: 'assets/images/projects/cadmus-5.gif',
          alt: 'Rich Text Editor'
        },
      ]
    },
    {
      id: 9,
      slug: 'session-monitor',
      title: 'Session Monitor',
      github: 'https://github.com/YKeanoe/session-monitor',
      description: `
        A personal project that I do in my free time, it is a chrome extension that is used to track each site's data usage. The extension will start when chrome starts and will run until chrome is closed, tracking each chrome session. The extension also have a stopwatch feature that can be started and paused to track a specific timeframe within the session. Another feature of the extension is the database will keep every sessions and stopwatches to be viewed, allowing users to see pasts sessions and data usages. The project was mainly done in javascript and within the restriction of chrome developer tools.
      `,
      summary: 'A personal project that I do in my free time, it is a chrome extension that is used to track each site\'s data usage. The extension will start when chrome starts and will run until chrome is closed, tracking each chrome session.',
      date: '2018-07-15',
      framework: ['javascript', 'css', 'html'],
      display: [
        {
          url: 'assets/images/projects/session-1.png',
          alt: 'Session Popup'
        },
        {
          url: 'assets/images/projects/session-2.png',
          alt: 'Stopwatch Popup'
        },
        {
          url: 'assets/images/projects/session-3.png',
          alt: 'Detail Page'
        },
        {
          url: 'assets/images/projects/session-4.png',
          alt: 'Session Page'
        },
        {
          url: 'assets/images/projects/session-5.png',
          alt: 'Detail Expanded Page'
        },
        {
          url: 'assets/images/projects/session-6.png',
          alt: 'Stopwatch Page'
        },
      ]
    },
    {
      id: 10,
      slug: 'telsoc-redesign',
      title: 'Telsoc Redesign',
      github: '',
      description: `
        A freelance task by Telecommunications Association (TelSoc). The project requires a full redesign of the website and a system cleanup using Drupal 7. We've decided to reuse Drupal 7 instead of upgrading to 8 or 9, due to multiple core modules that the site needed that are still outdated. The site's is designed and developed personally by me. Couple of the key features include memberships and tickets purchases, reports of article views, memberships, attendances, and events, and emailing newsletters, invitations, and reminders.

        One of the biggest challenge of this project is to migrate the whole database of the old site into the new site's structure, while also cleaning up some errors or unused data. So I've developed a PHP script to handle all the data migrations and detecting wrong or invalid data.
      `,
      summary: 'A freelance task by Telecommunications Association (TelSoc). The project requires a full redesign of the website and a system cleanup using Drupal 7. We\'ve decided to reuse Drupal 7 instead of upgrading to 8 or 9, due to multiple core modules that the site needed that are still outdated.',
      date: '2019-01-15',
      framework: ['drupal', 'php', 'mysql', 'html', 'css', 'javascript', 'aws', 'apache'],
      display: [
        {
          url: 'assets/images/projects/telsoc-1.png',
          alt: 'Homepage'
        },
        {
          url: 'assets/images/projects/telsoc-2.png',
          alt: 'Article Search'
        },
        {
          url: 'assets/images/projects/telsoc-3.png',
          alt: 'Events'
        },
        {
          url: 'assets/images/projects/telsoc-4.png',
          alt: 'Memberships'
        },
        {
          url: 'assets/images/projects/telsoc-5.png',
          alt: 'Event Page'
        },
        {
          url: 'assets/images/projects/telsoc-6.png',
          alt: 'Event Page Mobile'
        },
        {
          url: 'assets/images/projects/telsoc-7.png',
          alt: 'Homepage Mobile'
        },
        {
          url: 'assets/images/projects/telsoc-8.png',
          alt: 'Mobile Navigation'
        },
      ]
    },
    {
      id: 11,
      slug: 'anatelier',
      title: 'Anatelier Design Studio Website',
      github: '',
      description: `
        A full stack project for Anatelier, an architecture studio based in Jakarta.

        The site is separated into 2 part with Drupal as a CMS and Angular as a front-end. The backend of the site can manage the projects and serve json api to the frontend. The frontend of the site is viewed to the visitors and will fetch data from the backend. The frontend site is created in Angular, which means that the site is a Single Page Application.

        The design of the page is given by Anatelier themself.
      `,
      summary: 'A full stack project for Anatelier, an architecture studio based in Jakarta.',
      date: '2020-01-15',
      framework: ['drupal', 'angular', 'mysql', 'html', 'css', 'javascript', 'php'],
      display: [
        {
          url: 'assets/images/projects/anatelier-1.png',
          alt: 'Frontpage'
        },
        {
          url: 'assets/images/projects/anatelier-2.png',
          alt: 'Projects Page'
        },
        {
          url: 'assets/images/projects/anatelier-3.png',
          alt: 'Contact Page'
        },
        {
          url: 'assets/images/projects/anatelier-4.png',
          alt: 'Projects Page Grid'
        },
        {
          url: 'assets/images/projects/anatelier-5.png',
          alt: 'Project Page'
        },
        {
          url: 'assets/images/projects/anatelier-6.png',
          alt: 'Project Gallery'
        },
        {
          url: 'assets/images/projects/anatelier-7.png',
          alt: 'Administrator Page'
        },
        {
          url: 'assets/images/projects/anatelier-8.png',
          alt: 'Mobile Frontpage'
        },
        {
          url: 'assets/images/projects/anatelier-9.png',
          alt: 'Mobile Projects Page'
        },
        {
          url: 'assets/images/projects/anatelier-10.png',
          alt: 'Mobile Projects Grid'
        },
        {
          url: 'assets/images/projects/anatelier-11.png',
          alt: 'Mobile Contact Page'
        },
        {
          url: 'assets/images/projects/anatelier-12.png',
          alt: 'Mobile Project Page'
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