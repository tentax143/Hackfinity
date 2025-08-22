import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemStatements from "@/components/ProblemStatements";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-space">
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Community />
      <Footer />
    </div>
  );
}
