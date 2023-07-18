import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header'));
export default function Home() {
  return (
    <body>
      <header>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        im main
      </main>
    </body>
  );
}
