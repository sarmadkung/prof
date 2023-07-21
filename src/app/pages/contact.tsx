import React from 'react';
import Head from 'next/head';
import {ContactForm} from '../components/ContactForm';

export const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | My Portfolio</title>
      </Head>
      <div className="container mx-auto mt-10 px-4">
        <h1 className="text-3xl font-semibold mb-4">Contact Me</h1>
        <p className="mb-8">
          Feel free to get in touch with me using the form below:
        </p>
        <ContactForm />
      </div>
    </>
  );
};
