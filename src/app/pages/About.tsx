"use client";
import React from "react";
import TitleSection from "../components/TitleSection";
import { skilldata } from "@/lib/skill";
import RevealAnimation from "../components/RevealAnimation";
import { motion } from "motion/react";
import Margin from "../components/Margin";
import { useSectionRefs } from "../hooks/SectionRefContext";

export default function About() {
   const { section2Ref } = useSectionRefs();
   return (
      <Margin ref={section2Ref} id="section2" className="bg-layer">
         <TitleSection title="Skills" description="Keahlian" />
         <div className="mx-auto max-w-2xl transition-all duration-300 lg:max-w-6xl">
            <article className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-8 transition-all duration-300 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-y-8">
               {skilldata.map((data, i) => (
                  <RevealAnimation
                     key={i}
                     delay={0.25 + i * 0.05}
                     className="h-full w-full"
                  >
                     <motion.div className="group bg-background border-glassy relative h-full w-full overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]">
                        <div className="absolute top-0 right-0 -m-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/20" />

                        <div className="relative z-10 flex gap-6 lg:flex-col">
                           <div>
                              <data.icon
                                 className="fill-foreground h-12 w-12 lg:h-16 lg:w-16"
                                 style={{
                                    filter:
                                       "drop-shadow(5px -5px 40px var(--foreground))",
                                 }}
                              />
                           </div>
                           <div className="my-auto">
                              <a>
                                 <h5 className="text-xl font-semibold tracking-tight sm:text-lg">
                                    {data.title}
                                 </h5>
                              </a>
                           </div>
                        </div>
                        <p className="text-secondary relative z-10 mt-6 text-sm font-normal lg:mt-4">
                           {data.description}
                        </p>
                     </motion.div>
                  </RevealAnimation>
               ))}
            </article>
         </div>
      </Margin>
   );
}
