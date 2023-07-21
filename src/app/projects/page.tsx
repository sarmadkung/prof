// pages/projects.tsx

import React from 'react';
import Head from 'next/head';
import Header from '../components/header';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1...',
    imageUrl: '../../../public/my.jpeg',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2...',
    imageUrl: '../../../public/my.jpeg',

  },
  // Add more projects with their titles, descriptions, and image URLs
];

 const Projects: React.FC = () => {
  return (
    <>
    <Header />
      
      <Head>
        <title>Projects | My Portfolio</title>
      </Head>
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
 };

 export default Projects;
