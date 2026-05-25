import styles from "./page.module.css";
import HeroSection from "../components/sections/HeroSection";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";
import CtaSection from "../components/sections/CtaSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ServicesSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
