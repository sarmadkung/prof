/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image';
import React from 'react';
import Header from '../components/header';

 const About: React.FC = () => {
   return (
     <>
    <Header />
    <div className="flex justify-center items-center h-screen">
      {/* Left Div with Image */}
      <div className="flex flex-col w-200 items-center mr-8">
        <Image
                  width={150}
                  height={100}
          src="/my.jpeg"
          alt="Your Image"
          className="mb-4 "
        />
      </div>

      {/* Right Div with Text */}
      <div>
        <p className="text-2xl font-semibold">Hamza Mukhtar</p>
        <p className="text-gray-600">
          Full Stack Engineer (MERN)
              </p>
              <h1>Being a developer </h1>
              <p>I love it because it makes me feel smart. Ha ha. Just kidding.</p>
                  <p> I love it because I love solving problems.</p>
                <p>Writing code is an extension of that. Work doesn’t feel like work.</p>  
                 <p> It feels like I’m just playing games and solving riddles all day.</p>
      </div>
       </div>
       </>
  );
 };

export default About;
