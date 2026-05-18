"use client";
import { AnimatePresence, Variants } from "motion/react";
import { ArrowUpDown } from "lucide-react";
import { useState } from "react";

import { useSectionRefs } from "@/app/hooks/SectionRefContext";
import TitleSection from "@/app/components/TitleSection";
import ProjectCard from "@/app/components/ProjectCard";
import RevealAnimation from "@/app/components/Reveal";
import { Project, ProjectCategory } from "@/types";
import projectsData from "@/data/projects.json";
import Margin from "@/app/components/Margin";
import Modal from "@/app/components/Modal";
import { cn } from "@/lib/utils";

const data = projectsData as Project[];

type Categories = "All" | ProjectCategory;

export default function Projects() {
   const [selectedItem, setSelectedItem] = useState<Project | null>(null);
   const [activeCategory, setActiveCategory] = useState<Categories>("All");
   const { projectRef } = useSectionRefs();
   const [isOpen, setIsOpen] = useState(false);
   const [isFiltered, setIsFiltered] = useState(false);
   const [sortOrder, setSortOrder] = useState<"Latest" | "Oldest">("Latest");

   const filterVariants: Variants = {
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
      .sort((a, b) => {
         const dateA = new Date(a.date).getTime();
         const dateB = new Date(b.date).getTime();
         return sortOrder === "Latest" ? dateB - dateA : dateA - dateB;
      });

   const categories: Categories[] = [
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

   function handleOpen(data: Project) {
      if (selectedItem && selectedItem.id !== data.id) return;
      setSelectedItem(selectedItem?.id === data.id ? null : data);
   }

   return (
      <>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
         />
         <Margin
            ref={projectRef}
            className="bg-layer"
            customContainerClassName="sm:gap-y-8 lg:gap-y-16 gap-y-6"
         >
            <TitleSection title="Projects" description="My Creation" />

            <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2">
               {categories.map((category, index) => (
                  <RevealAnimation key={category} delay={index * 0.1}>
                     <button
                        onClick={() => {
                           setActiveCategory(category);
                           setIsFiltered(true);
                        }}
                        className={cn(
                           "rounded-xl border cursor-pointer px-4 py-1 text-sm font-medium transition-all sm:px-6 sm:py-2",
                           activeCategory === category
                              ? "text-foreground border-transparent bg-transparent font-bold backdrop-blur-md"
                              : "border-glassy text-secondary hover:text-foreground border bg-white/5 backdrop-blur-lg hover:bg-white/10 active:scale-[0.95]",
                        )}
                     >
                        {category}
                     </button>
                  </RevealAnimation>
               ))}
               <RevealAnimation delay={categories.length * 0.1}>
                  <button
                     onClick={() => {
                        setSortOrder(
                           sortOrder === "Latest" ? "Oldest" : "Latest",
                        );
                        setIsFiltered(true);
                     }}
                     className={cn(
                        "border-glassy cursor-pointer text-secondary hover:text-foreground flex items-center gap-2 rounded-xl border bg-white/5 p-1.5 text-sm font-medium backdrop-blur-lg transition-all hover:bg-white/10 active:scale-[0.95] sm:p-2.5",
                     )}
                  >
                     <ArrowUpDown className="size-4" />
                  </button>
               </RevealAnimation>
            </div>

            <div className="mx-auto flex max-w-2xl lg:max-w-6xl flex-wrap justify-center gap-8">
               <AnimatePresence>
                  {filteredData.map((item, i) => (
                     <ProjectCard
                        key={item.title}
                        // grid system calculation (flex basis)
                        // w-[calc(100% / jumlah_cols - (gap: contoh gap-8 = 32px) / jumlah_cols)]
                        className="w-full md:w-[calc(100%/2-32px/2)] lg:w-[calc(100%/3-64px/3)]"
                        item={item}
                        index={i}
                        isFiltered={isFiltered}
                        filterVariants={filterVariants}
                        onClick={() => {
                           handleOpen(item);
                           setIsOpen(true);
                        }}
                        isOpen={isOpen}
                        isSelected={selectedItem?.id === item.id}
                        isAnySelected={selectedItem !== null}
                     />
                  ))}
               </AnimatePresence>
            </div>
         </Margin>

         <Modal
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
         />
      </>
   );
}
