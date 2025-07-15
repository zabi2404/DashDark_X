import React, { Suspense, lazy } from 'react';
import SixthSection from '../../section/Dashboard/SixthSection';

// ⏬ Lazy‑load each section
const Header         = lazy(() => import('../../section/Dashboard/Header'));
const SecondSection  = lazy(() => import('../../section/Dashboard/SecondSection'));
const ThirdSection   = lazy(() => import('../../section/Dashboard/ThirdSection'));
const FourthSection  = lazy(() => import('../../section/Dashboard/FourthSection'));
const FifthSection   = lazy(() => import('../../section/Dashboard/FifthSection'));

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="flex justify-center py-10">Loading…</div>}>
      <Header />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection/>
    </Suspense>
  );
}
