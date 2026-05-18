"use client";
import { useSectionRefs } from "@/app/hooks/SectionRefContext";
import RevealAnimation from "@/app/components/Reveal";

export default function Hero() {
   const { headRef } = useSectionRefs();
   return (
      <section
         ref={headRef}
         className="z-10 relative h-screen px-6 pt-14 lg:px-8"
      >
         <div className="z-10 mx-auto flex h-full max-w-2xl py-48 md:items-center md:py-0">
            <div className="flex flex-col gap-y-4 md:text-center">
               <div className="">
                  <RevealAnimation className="flex items-center md:justify-center">
                     <RevealAnimation
                        as="span"
                        className="relative z-10 text-5xl leading-[0.8] font-extrabold sm:text-6xl"
                     >
                        Hi! I&apos;m
                     </RevealAnimation>

                     <RevealAnimation
                        direction="right"
                        delay={0.5}
                        as="span"
                        className="border-glassy border p-2  bg-foreground text-background sm:align-[12px] text-xl ml-2 flex items-center gap-1 rounded-full px-2.5 py-1.5 text-center align-[8px] font-semibold sm:px-5 sm:py-2.5 sm:text-3xl"
                     >
                        Frontend Dev
                     </RevealAnimation>
                  </RevealAnimation>
                  <RevealAnimation className="flex flex-wrap gap-x-2 text-5xl leading-none font-extrabold sm:text-6xl md:justify-center">
                     {/* Muhammad Nur Alim */}
                     <RevealAnimation as="span" delay={0.1}>
                        Muhammad
                     </RevealAnimation>
                     <RevealAnimation as="span" delay={0.15}>
                        Nur
                     </RevealAnimation>
                     <RevealAnimation as="span" delay={0.2}>
                        Alim
                     </RevealAnimation>
                  </RevealAnimation>
               </div>
               <RevealAnimation
                  as="p"
                  delay={0.3}
                  className="font text-secondary line-clamp-4 text-lg leading-8 font-medium"
               >
                  Haloo aku lim, aku seorang frontend web developer. aku
                  mahasiswa ekonomi tapi juga bisa ngoding hehe.. 😎
               </RevealAnimation>
            </div>
         </div>
      </section>
   );
}
