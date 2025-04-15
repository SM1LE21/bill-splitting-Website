import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
// import Testimonials from '@/components/sections/Testimonials'; TODO: Add testimonials when we have some
import CTA from '@/components/sections/CTA';
import Layout from '@/components/layout/Layout';
import AppShowcase from '@/components/sections/AppShowcase';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AppShowcase />
      <Features />
      <HowItWorks />
      <Benefits />
      {/*<Testimonials /> TODO: Add testimonials when we have some*/}
      <CTA />
      <Contact />
    </Layout>
  );
}
