import Hero from '@/components/hero/Hero_1'
import About from '@/components/about/About_1'
import Location from '@/components/findus/FindUs_1'
import Bar from '@/components/bar/HoursLocationBar'
import Features from '@/components/features/Features_2'
import Menu from '@/components/menu/Menu_1'

export default function HomePage() {
  return (
      <main>
        <Hero />
        <Bar />
        <Features />
        <Menu />
        <About />
        <Location />
      </main>
  );
}