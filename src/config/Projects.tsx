import CSS from '@/components/technologies/CSS';
import Github from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MDXIcon from '@/components/technologies/MDXIcon';
import NextJs from '@/components/technologies/NextJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'ChatGPT Exporter',
    description:
      'A Chrome extension to export ChatGPT conversations directly to GitHub with clean Markdown formatting and selective export options.',
    image: '/project/chatgpt-exporter.png',
    link: 'https://chromewebstore.google.com/detail/geafjnnpafgniemfjbhennjehaicllhk',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'GitHub API', icon: <Github key="github" /> },
      { name: 'Markdown', icon: <MDXIcon key="mdx" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf',
    live: 'https://chromewebstore.google.com/detail/geafjnnpafgniemfjbhennjehaicllhk',
    details: false,
    projectDetailsPageSlug:
      'https://chromewebstore.google.com/detail/geafjnnpafgniemfjbhennjehaicllhk',
    isWorking: true,
  },
  {
    title: 'StickyNoteX',
    description:
      'Sticky notes in the browser — capture tasks and ideas quickly with a focused, responsive experience.',
    image: '/project/stickynotex.png',
    link: 'https://stickynotex.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf',
    live: 'https://stickynotex.vercel.app',
    details: false,
    projectDetailsPageSlug: 'https://stickynotex.vercel.app',
    isWorking: true,
  },
  {
    title: 'Zerodha Clone',
    description:
      'Comprehensive clone of the Zerodha trading dashboard with portfolio tracking, user authentication, and an interactive UI.',
    image: '/project/zerodha.png',
    link: 'https://zerodha-webapp.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf/zerodha-webapp',
    live: 'https://zerodha-webapp.vercel.app/',
    details: false,
    projectDetailsPageSlug: 'https://zerodha-webapp.vercel.app/',
    isWorking: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio with responsive layout, component-based React structure, contact section, and client-side form validation.',
    image: '/project/syncify.png',
    link: 'https://github.com/Nikhilesh-sarraf',
    technologies: [
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf',
    live: 'https://github.com/Nikhilesh-sarraf',
    details: false,
    projectDetailsPageSlug: 'https://github.com/Nikhilesh-sarraf',
    isWorking: true,
  },
  {
    title: 'Weather Forecasting App',
    description:
      'Real-time weather app with search, API-driven state, error handling, and mobile-first layouts using OpenWeather data.',
    image: '/project/appwrite.png',
    link: 'https://github.com/Nikhilesh-sarraf',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'HTML', icon: <Html key="html" /> },
      { name: 'CSS', icon: <CSS key="css" /> },
      { name: 'REST APIs', icon: <Postman key="api" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf',
    live: 'https://github.com/Nikhilesh-sarraf',
    details: false,
    projectDetailsPageSlug: 'https://github.com/Nikhilesh-sarraf',
    isWorking: true,
  },
  {
    title: 'DSA Visualizer',
    description:
      'C++ visualizer for sorting algorithms with step-by-step playback to study complexity and execution flow.',
    image: '/project/quest.png',
    link: 'https://github.com/Nikhilesh-sarraf',
    technologies: [
      { name: 'C++', icon: <JavaScript key="cpp" /> },
      { name: 'Algorithms', icon: <JavaScript key="algo" /> },
    ],
    github: 'https://github.com/Nikhilesh-sarraf',
    live: 'https://github.com/Nikhilesh-sarraf',
    details: false,
    projectDetailsPageSlug: 'https://github.com/Nikhilesh-sarraf',
    isWorking: true,
  },
];
