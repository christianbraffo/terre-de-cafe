import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Passion from "@/components/Passion";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AnimateOnScroll immediate direction="up">
          <Hero />
        </AnimateOnScroll>

        <AnimateOnScroll direction="left">
          <About />
        </AnimateOnScroll>

        <AnimateOnScroll direction="up">
          <Services />
        </AnimateOnScroll>

        <AnimateOnScroll direction="none" delay={100}>
          <Partners />
        </AnimateOnScroll>

        <AnimateOnScroll direction="right">
          <Passion />
        </AnimateOnScroll>

        <AnimateOnScroll direction="up">
          <FAQ />
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={150}>
          <CTA />
        </AnimateOnScroll>
      </main>

      <AnimateOnScroll direction="up">
        <Footer />
      </AnimateOnScroll>
    </>
  );
}
