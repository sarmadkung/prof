import React, { lazy, Suspense } from 'react';
import { MyHome } from './components/myHome';
const Header = lazy(() => import('./components/header'));
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
      </main>
    </body>
  );
}
