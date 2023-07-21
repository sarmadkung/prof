import React, { lazy, Suspense } from 'react';
import { Contact } from './contact';
import { Projects } from './projects';
import { Skills } from './skills';
import { MyHome } from './myHome';
const Header = lazy(() => import('./header'));
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
