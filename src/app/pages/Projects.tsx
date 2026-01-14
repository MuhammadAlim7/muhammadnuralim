"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { data, formatDate, Project, ProjectCategory } from "@/lib/project";
import { cn } from "@/lib/utils";
import RevealAnimation from "../components/RevealAnimation";
import TitleSection from "@/app/components/TitleSection";
import Margin from "../components/Margin";
import Image from "next/image";
import { Drawer } from "../components/Drawer";
import { useSectionRefs } from "../hooks/SectionRefContext";

export default function Projects() {
   const [selectedItem, setSelectedItem] = useState<Project | null>(null);
   const [activeCategory, setActiveCategory] = useState<
      "All" | ProjectCategory
   >("All");
   const { section3Ref } = useSectionRefs();
   const [hasUserInteracted, setHasUserInteracted] = useState(false);

   const filterVariants = {
      hidden: {
         opacity: 0,
         y: 0,
         x: 0,
         transition: { duration: 0.3, ease: "easeOut" },
      },
      visible: { opacity: 1, y: 0, x: 0 },
   };

   const filteredData = data
      .filter(
         (item) => activeCategory === "All" || item.category === activeCategory,
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

   const categories: ("All" | ProjectCategory)[] = [
      "All",
      "Web",
      "UI/UX",
      // "Data/Finance",
   ];

   const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: filteredData.map((item, index) => ({
         "@type": "ListItem",
         position: index + 1,
         item: {
            "@type": "CreativeWork",
            name: item.title,
            description: item.description,
            image: item.images,
            dateCreated: item.date,
            genre: item.category,
         },
      })),
   };

   return (
      <>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <Margin
            ref={section3Ref}
            id="section3"
            className="bg-layer"
            customContainerClassName="sm:gap-y-8 lg:gap-y-16 gap-y-6"
         >
            <TitleSection title="Projects" description="My Creation" />

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 sm:justify-center">
               {categories.map((category, index) => (
                  <RevealAnimation key={category} delay={index * 0.1}>
                     <button
                        onClick={() => {
                           setActiveCategory(category);
                           setHasUserInteracted(true);
                        }}
                        className={cn(
                           "rounded-xl border px-4 py-1 text-sm font-medium transition-all sm:px-6 sm:py-2",
                           activeCategory === category
                              ? "text-foreground border-transparent bg-transparent font-bold backdrop-blur-md"
                              : "border-glassy text-secondary hover:text-foreground border bg-white/5 backdrop-blur-lg hover:bg-white/10 active:scale-[0.95]",
                        )}
                     >
                        {category}
                     </button>
                  </RevealAnimation>
               ))}
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-8 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-3">
               <AnimatePresence>
                  {filteredData.map((item, i) => (
                     <RevealAnimation
                        layout
                        inView={!hasUserInteracted}
                        variant={hasUserInteracted ? filterVariants : undefined}
                        key={item.title} // Changed key to title since index is unstable with filtering
                        delay={0 + (i % 3) * 0.05} // Adjusted delay for better UX on re-render
                        className="flex max-w-xl flex-col items-start justify-between"
                     >
                        <article className="relative grid w-full gap-y-4">
                           <RevealAnimation
                              inView={!hasUserInteracted}
                              variant={
                                 hasUserInteracted ? filterVariants : undefined
                              }
                              delay={0.1}
                              className="group bg-darker relative z-10 overflow-hidden rounded-2xl"
                           >
                              <RevealAnimation
                                 inView={!hasUserInteracted}
                                 variant={
                                    hasUserInteracted
                                       ? filterVariants
                                       : undefined
                                 }
                                 delay={0.15}
                                 className="w-full"
                              >
                                 <div className="translate-y-8 scale-[0.875]">
                                    <motion.div
                                       onClick={() => setSelectedItem(item)}
                                       whileHover={
                                          selectedItem ? {} : { rotate: 2 }
                                       }
                                       animate={{
                                          y: selectedItem === item ? 400 : 0,
                                       }}
                                       transition={{
                                          type: "spring",
                                          damping: 18,
                                          stiffness: 100,
                                          rotate: { duration: 0.2 },
                                       }}
                                       className={cn(
                                          "cursor-pointer overflow-hidden rounded-xl shadow-sm",
                                       )}
                                    >
                                       <Image
                                          height={720}
                                          width={1280}
                                          src={`/images/${item.images}`}
                                          alt={item.title}
                                          className="aspect-video object-cover"
                                       />
                                    </motion.div>
                                 </div>
                              </RevealAnimation>
                           </RevealAnimation>

                           <header>
                              <h3 className="text-xl leading-6 font-semibold">
                                 {item.title}
                              </h3>
                              <span className="text-secondary mr-1 text-sm font-medium text-nowrap">
                                 {formatDate(item.date)}
                              </span>
                           </header>

                           <div className="left-0 flex flex-wrap gap-x-2 gap-y-2 transition-all">
                              {item.languages.map((language, idx) => (
                                 <RevealAnimation
                                    inView={!hasUserInteracted}
                                    variant={
                                       hasUserInteracted
                                          ? filterVariants
                                          : undefined
                                    }
                                    key={idx}
                                    delay={0.25 + idx * 0.05}
                                 >
                                    <div className="bg-darker text-secondary flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium">
                                       {language.name}
                                    </div>
                                 </RevealAnimation>
                              ))}
                           </div>
                        </article>
                     </RevealAnimation>
                  ))}
               </AnimatePresence>
            </div>
         </Margin>

         <Drawer
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
         />
      </>
   );
}
