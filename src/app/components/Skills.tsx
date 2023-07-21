import React from 'react';
import Head from 'next/head';
import { SkillItem } from './SkillItem';

export const Skills: React.FC = () => {
  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
      </Head>
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold mb-8">My Skills</h1>
        <div className="grid grid-cols-2 gap-4">
          <SkillItem title="MongoDB" >
            MongoDB is a NoSQL database used for storing data in JSON-like format. I have experience in designing database schemas and performing CRUD operations with MongoDB.
          </SkillItem>
          <SkillItem title="Express" >
            Express is a popular web application framework for Node.js. I have used Express to build RESTful APIs and handle server-side routing in my projects.
          </SkillItem>
          <SkillItem title="React">
            React is a JavaScript library for building user interfaces. I have worked extensively with React to create dynamic and interactive front-end applications.
          </SkillItem>
          <SkillItem title="Node.js" >
            Node.js is a server-side JavaScript runtime environment. I have experience in building server-side applications and APIs using Node.js.
          </SkillItem>
        </div>
      </div>
    </>
  );
};
