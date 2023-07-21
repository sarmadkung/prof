import React, { lazy, Suspense } from 'react';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { MyHome } from './components/MyHome';
const Header = lazy(() => import('./components/Header'));
export default function Home() {
  return (
    <body className=''>
      <header className=''>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MyHome />
        <Skills />

        {/* <Contact /> */}
      </main>
    </body>
  );
}
