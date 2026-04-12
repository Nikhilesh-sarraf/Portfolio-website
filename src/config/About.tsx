import BootStrap from '@/components/technologies/BootStrap';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import Postman from '@/components/technologies/Postman';
import ReactIcon from '@/components/technologies/ReactIcon';
import React from 'react';

export const mySkills: { name: string; icon: React.ReactNode }[] = [
  { name: 'React', icon: <ReactIcon key="react" /> },
  { name: 'Node.js', icon: <NodeJs key="node" /> },
  { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
  { name: 'Express.js', icon: <ExpressJs key="express" /> },
  { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
  { name: 'HTML', icon: <Html key="html" /> },
  { name: 'CSS', icon: <CSS key="css" /> },
  { name: 'Bootstrap', icon: <BootStrap key="bootstrap" /> },
  { name: 'Postman', icon: <Postman key="postman" /> },
];

export const about = {
  name: 'Nikhilesh Sarraf',
  description: `I'm a Computer Science undergraduate at KIIT (B.Tech CSE) with a strong focus on web development, data structures, and building responsive apps with React and the MERN-style stack. I enjoy competitive programming and turning ideas into polished UI.`,
};
