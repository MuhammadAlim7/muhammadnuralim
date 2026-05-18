"use client";

import {
   Motherboard,
   Interface,
   Database,
   LandingPage,
} from "@/app/components/icons/CustomIcons";
import { useSectionRefs } from "@/app/hooks/SectionRefContext";
import TitleSection from "@/app/components/TitleSection";
import RevealAnimation from "@/app/components/Reveal";
import Margin from "@/app/components/Margin";

const skilldata = [
   {
      icon: Motherboard,
      title: "IT Support & Troubleshooting",
      description:
         "Mendiagnosis, memperbaiki, dan mengoptimalkan sistem komputer baik dari segi perangkat keras maupun lunak guna memastikan performa teknologi tetap andal dan lancar.",
   },
   {
      icon: Interface,
      title: "UI/UX Design",
      description:
         "Merancang desain antarmuka yang estetis, modern, dan intuitif untuk menciptakan pengalaman pengguna yang mulus, interaktif, serta mudah digunakan.",
   },
   {
      icon: Database,
      title: "Data Entry",
      description:
         "Mengelola, memasukkan, dan memvalidasi data ke dalam basis data atau platform manajemen perusahaan (seperti Excel & ERP) dengan ketelitian tinggi agar tetap terstruktur.",
   },
   {
      icon: LandingPage,
      title: "Frontend Developer",
      description:
         "Mentransformasikan konsep desain menjadi aplikasi web yang interaktif, responsif, dan berkinerja tinggi dengan fokus utama pada optimalisasi performa dan kenyamanan pengguna.",
   },
];
export default function About() {
   const { aboutRef } = useSectionRefs();
   return (
      <Margin ref={aboutRef} className="bg-layer">
         <TitleSection title="Skills" description="Keahlian" />
         <div className="mx-auto max-w-2xl transition-all duration-300 lg:max-w-6xl">
            <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-8 transition-all duration-300 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-y-8">
               {skilldata.map((data, i) => (
                  <RevealAnimation
                     as="article"
                     key={i}
                     delay={0.25 + i * 0.05}
                     className="h-full w-full"
                  >
                     <div className="group bg-background border-glassy relative h-full w-full overflow-hidden rounded-2xl border p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]">
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
                              <h2 className="text-xl font-semibold leading-5 tracking-tight sm:text-lg">
                                 {data.title}
                              </h2>
                           </div>
                        </div>
                        <p className="text-secondary relative z-10 mt-6 text-sm font-normal lg:mt-4">
                           {data.description}
                        </p>
                     </div>
                  </RevealAnimation>
               ))}
            </div>
         </div>
      </Margin>
   );
}
