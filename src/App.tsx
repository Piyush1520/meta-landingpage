/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { WhatYouWillLearn } from './components/WhatYouWillLearn';
import { ValueStack } from './components/ValueStack';
import { WhoShouldAttend } from './components/WhoShouldAttend';
import { SocialProof } from './components/SocialProof';
import { TrainerSection } from './components/TrainerSection';
import { FAQSection } from './components/FAQSection';
import { FooterCTA } from './components/FooterCTA';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background selection:bg-primary selection:text-primary-foreground font-sans text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      
      <main>
        <Hero />
        <PainPoints />
        <WhatYouWillLearn />
        <ValueStack />
        <WhoShouldAttend />
        <SocialProof />
        <TrainerSection />
        <FAQSection />
        <FooterCTA />
      </main>

      <StickyMobileCTA />
    </div>
  );
}

