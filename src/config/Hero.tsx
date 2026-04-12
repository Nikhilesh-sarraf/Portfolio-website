import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import ExpressJs from '@/components/technologies/ExpressJs';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import React from 'react';

export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  JavaScript: JavaScript,
  MongoDB: MongoDB,
  NodeJs: NodeJs,
  ExpressJs: ExpressJs,
};

export const heroConfig = {
  name: 'Nikhilesh Sarraf',
  title: 'CS undergrad · Web developer · Problem solver',
  avatar: '/assets/avatar.png',

  skills: [
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      component: 'JavaScript',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Express.js',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
  ],

  description: {
    template:
      'I build responsive web apps with {skills:0}, {skills:1}, and {skills:2}, and I work across the stack with {skills:3} and {skills:4}. Strong in <b>DSA</b> (250+ problems) and <b>SQL</b> practice. Currently pursuing my B.Tech in CSE at <b>KIIT</b>.',
  },

  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nikhilesh-sarraf/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/Nikhilesh-sarraf',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:nikhileshsarrafking123@gmail.com',
    icon: <Mail />,
  },
];
