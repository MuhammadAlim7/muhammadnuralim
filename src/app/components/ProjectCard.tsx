import { motion, Variants } from "motion/react";
import Image from "next/image";

import RevealAnimation from "@/app/components/Reveal";
import { cn, formatDate } from "@/lib/utils";
import { Project } from "@/types";

const MotionImage = motion.create(Image);

interface ProjectCardProps {
   item: Project;
   index: number;
   isFiltered: boolean;
   filterVariants: Variants;
   className?: string;
   onClick: () => void;
   isOpen: boolean;
   isSelected: boolean;
   isAnySelected: boolean;
}

export default function ProjectCard({
   item,
   index,
   isFiltered,
   filterVariants,
   className,
   onClick,
   isOpen,
   isSelected,
   isAnySelected,
}: ProjectCardProps) {
   const revealProps = {
      inView: !isFiltered,
      variant: isFiltered ? filterVariants : undefined,
   };

   return (
      <RevealAnimation
         as="article"
         layout
         {...revealProps}
         delay={0 + (index % 3) * 0.05}
         className={cn(
            "max-w-xl flex-col relative grid w-full gap-y-4",
            className,
         )}
      >
         <RevealAnimation
            as="button"
            {...revealProps}
            delay={0.1}
            className="group w-full bg-darker relative z-10 overflow-hidden rounded-2xl"
            onClick={onClick}
         >
            <RevealAnimation
               {...revealProps}
               delay={0.15}
               className="w-full translate-y-8 scale-[0.875]"
            >
               <MotionImage
                  whileHover={isAnySelected ? {} : { rotate: 2 }}
                  animate={{ y: isSelected && isOpen ? 400 : 0 }}
                  transition={{
                     type: "spring",
                     damping: 18,
                     stiffness: 100,
                     rotate: { duration: 0.2 },
                  }}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-sm aspect-video object-cover w-full"
                  height={720}
                  width={1280}
                  src={`/images/${item.images}`}
                  alt={item.title}
               />
            </RevealAnimation>
         </RevealAnimation>

         <header>
            <h2 className="text-xl leading-6 font-semibold">{item.title}</h2>
            <span className="text-secondary mr-1 text-sm font-medium text-nowrap">
               {formatDate(item.date)}
            </span>
         </header>

         <ul className="left-0 flex flex-wrap gap-x-2 gap-y-2 transition-all list-none">
            {item.languages.map((language, idx) => (
               <RevealAnimation
                  as="li"
                  {...revealProps}
                  key={idx}
                  delay={0.25 + idx * 0.05}
               >
                  <div className="bg-darker text-secondary flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium">
                     {language.name}
                  </div>
               </RevealAnimation>
            ))}
         </ul>
      </RevealAnimation>
   );
}
