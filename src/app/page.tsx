import Background from "@/app/components/Background";
import Projects from "@/app/sections/Projects";
import Footer from "@/app/components/Footer";
import Contact from "@/app/sections/Contact";
import About from "@/app/sections/About";
import Bar from "@/app/components/Bar";
import Hero from "@/app/sections/Hero";

export default function Home() {
   return (
      <main data-vaul-drawer-wrapper>
         <Background />
         <Hero />
         <About />
         <Bar />
         <Projects />
         <Contact />
         <Footer />
      </main>
   );
}
