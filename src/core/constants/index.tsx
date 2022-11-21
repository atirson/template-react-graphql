import { ExperienceProps } from "@app/core/types/Experiences";
import { SkillProps } from "@app/core/types/Skill";
import { MdSchool as SchoolIcon, MdWork as WorkIcon } from 'react-icons/md'


export const Frontend: SkillProps[] = [
  {
    href:"https://reactjs.org/",
    src:"https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg",
    alt:"React"
  },
  {
    href:"https://www.javascript.com/",
    src:"https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
    alt:"JavaScript"
  },
  {
    href:"https://www.typescriptlang.org/",
    src:"https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
    alt:"TypeScript"
  },
  {  
    href:"https://en.wikipedia.org/wiki/HTML5",
    src:"https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg",
    alt:"HTML5"
  },
  {
    href:"https://redux.js.org/",
    src:"https://profilinator.rishav.dev/skills-assets/redux-original.svg",
    alt:"Redux"
  },
  {
    href:"https://www.electronjs.org/",
    src:"https://profilinator.rishav.dev/skills-assets/electron-original.svg",
    alt:"Electron"
  },
  {
    href:"https://webpack.js.org/",
    src:"https://profilinator.rishav.dev/skills-assets/webpack-original.svg",
    alt:"Webpack"
  },
  {
    href:"https://graphql.org/",
    src:"https://profilinator.rishav.dev/skills-assets/graphql.png",
    alt:"GraphQL"
  },
  {
    href:"https://www.jestjs.io/",
    src:"https://profilinator.rishav.dev/skills-assets/jest.svg",
    alt:"Jest"
  }
]; 

export const Backend: SkillProps[] = [
  {
    href:"https://www.php.net/",
    src:"https://profilinator.rishav.dev/skills-assets/php-original.svg",
    alt:"PHP"
  },
  {
    href:"https://www.mongodb.com/",
    src:"https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg",
    alt:"MongoDB"
  },
  {
    href:"https://nodejs.org/",
    src:"https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
    alt:"Node.js"
  },
  {
    href:"https://expressjs.com/",
    src:"https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
    alt:"Express.js"
  },
  {
    href:"https://laravel.com/",
    src:"https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg",
    alt:"Laravel"
  },
  {
    href:"https://www.postgresql.org/",
    src:"https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg",
    alt:"PostgreSQL"
  },
  {
    href:"https://www.mysql.com/",
    src:"https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg",
    alt:"MySQL"
  },
  {
    href:"https://redis.io/",
    src:"https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg",
    alt:"Redis"
  } 
]

export const Devops: SkillProps[] = [
  {
    href:"https://aws.amazon.com/",
    src:"https://profilinator.rishav.dev/skills-assets/amazonwebservices-original-wordmark.svg",
    alt:"AWS"
  },
  {
    href:"https://kubernetes.io/",
    src:"https://profilinator.rishav.dev/skills-assets/kubernetes-icon.svg",
    alt:"Kubernetes"
  },
  {
    href:"https://www.linux.org/",
    src:"https://profilinator.rishav.dev/skills-assets/linux-original.svg",
    alt:"Linux"
  },
  {
    href:"https://github.com/",
    src:"https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg",
    alt:"Git"
  },
  {
    href:"https://www.terraform.io/",
    src:"https://profilinator.rishav.dev/skills-assets/terraformio-icon.svg",
    alt:"Terraform"
  },
  {
    href:"https://azure.microsoft.com/en-in/",
    src:"https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg",
    alt:"Azure"
  },
  {
    href:"https://www.docker.com/",
    src:"https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg",
    alt:"Docker"
  }, 
]


export const TIMELINE: ExperienceProps[] = [
  {
    id: '1',
    props: {
      date: '2022 - present',
      className: 'vertical-timeline-element--work',
      contentStyle: { background: '#222831', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  #222831' },
      iconStyle: { background: '#222831', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Front-end Developer',
    subtitle: 'CI&T Software',
    content:
      `Working in international project. Development system web using ReactJS, NodeJS, Jest, Azure Devops, Jira, Braze, MongoDB, Segment, New Relic.`,
  },
  {
    id: '2',
    props: {
      date: '2020 - 2022',
      className: 'vertical-timeline-element--work',
      contentStyle: { background: '#00ADB5', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  #00ADB5' },
      iconStyle: { background: '#00ADB5', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Fullstack Developer',
    subtitle: 'Squadra Tecnologia',
    content:
      `Work to a lot of clients and projects. Using technologies like Node, React, NextJS, TypeScript, PHP, MongoDB, MySQL, Docker, AWS, etc.`,
  },
  {
    id: '3',
    props: {
      date: '2021 - 2022',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: '#222831', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  #222831' },
      iconStyle: { background: '#222831', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'ReactJS Expert Tutor',
    subtitle: 'AlgaWorks',
    content: `Tutor ReactJS I'm responsable to answer questions of students and give orientation how to fix some problems into universe of ReactJS.`,
  },
  {
    id: '4',
    props: {
      date: '2019 - 2020',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: '#00ADB5', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  #00ADB5' },
      iconStyle: { background: '#00ADB5', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Frontend Developer',
    subtitle: 'Inline Engenharia',
    content: `Development of web pages with Javascript, ReactJS and mobile using React Native and at back-end NodeJs and PHP. During my experience I was use SQLite, MySql and Postgres.`,
  },
  {
    id: '5',
    props: {
      date: '2018 - 2021',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: '#222831', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  #222831' },
      iconStyle: { background: '#222831', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Bachelor Degree at Software Engineer',
    subtitle: 'Universidade - UniEvangélica de Anápolis',
    content: `I was a student of the University of Anápolis, Brazil. I studied the field of Computer Science and Information Systems. With focus in development, test, management and etc.`,
  },
];
