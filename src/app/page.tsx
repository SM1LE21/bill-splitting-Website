import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Roadmap from '@/components/sections/Roadmap';
// import Testimonials from '@/components/sections/Testimonials'; TODO: Add testimonials when we have some
import CTA from '@/components/sections/CTA';
import Layout from '@/components/layout/Layout';
import AppShowcase from '@/components/sections/AppShowcase';
import DeveloperStory from '@/components/sections/DeveloperStory';
import HomeScrollSnap from '@/components/ui/HomeScrollSnap';

export default function Home() {
  return (
    <Layout>
      <HomeScrollSnap />
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <Benefits />
      <Roadmap />
      {/*<Testimonials /> TODO: Add testimonials when we have some*/}
      <DeveloperStory />
      <CTA />
    </Layout>
  );
}
