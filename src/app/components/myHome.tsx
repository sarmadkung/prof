/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";

export const MyHome: React.FC = () => {
  const socialMediaLinks = [
    { source: "/facebook-f.svg", link: "https://www.facebook.com/" },
    { source: "/twitter.svg", link: "https://www.twitter.com/" },
    { source: "/linkedin-in.svg", link: "https://www.instagram.com/" },
    { source: "/github.svg", link: "https://www.github.com/" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col w-200 items-center mr-8">
        <Image
          width={150}
          height={100}
          src="/my.jpeg"
          alt="Your Image"
          className="mb-4 "
        />
      </div>
      <div>
        <p className="text-2xl font-semibold">Hi There, I'm</p>

        <p className="text-2xl font-semibold">Hamza Mukhtar</p>
        <p className="text-gray-600">Full Stack Engineer (MERN)</p>
        <div className="my-5">
        <ul className="flex space-x-5">
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <i>
                  <Image
                    width={15}
                    height={15}
                    src={item.source}
                    alt="Your Image"
                    color="white"
                  />
                </i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      </div>

    </div>
  );
};
