import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Bill Splitting App - Split Expenses with Friends Easily',
  description: 'The easiest way to split bills and track expenses with friends, roommates, and groups. No more awkward money conversations.',
  keywords: 'bill splitting, expense tracking, shared expenses, roommate expenses, group payments',
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
