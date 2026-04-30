import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import ProductFlow from '@/components/sections/ProductFlow';
import Benefits from '@/components/sections/Benefits';
import Roadmap from '@/components/sections/Roadmap';
import CTA from '@/components/sections/CTA';
import Layout from '@/components/layout/Layout';
import DeveloperStory from '@/components/sections/DeveloperStory';
import HomeScrollSnap from '@/components/ui/HomeScrollSnap';

export default function Home() {
  return (
    <Layout>
      <HomeScrollSnap />
      <Hero />
      <SocialProof />
      <Features />
      <HowItWorks />
      <ProductFlow />
      <Benefits />
      <Roadmap />
      <DeveloperStory />
      <CTA />
    </Layout>
  );
}
