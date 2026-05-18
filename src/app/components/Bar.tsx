"use client";
import {
   AnimatePresence,
   motion,
   MotionValue,
   useMotionValue,
   useSpring,
   useTransform,
} from "motion/react";
import {
   Code,
   File,
   Home,
   LucideProps,
   MessageSquareMore,
   Moon,
   Sun,
   User,
} from "lucide-react";
import React, { useRef, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { useSectionRefs } from "@/app/hooks/SectionRefContext";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export default function Bar() {
   const mounted = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false,
   );
   const { theme, setTheme } = useTheme();
   const { headRef, aboutRef, projectRef, contactRef } = useSectionRefs();

   const handleScroll = (
      ref: React.RefObject<HTMLElement> | React.RefObject<null>,
   ) => {
      ref?.current?.scrollIntoView({ behavior: "smooth" });
   };

   const mouseX = useMotionValue(Infinity);
   const ThemeIcon = theme === "dark" ? Moon : Sun;
   const ThemeName = theme === "dark" ? "Dark" : "Light";

   const navigations = [
      { name: "Home", href: headRef, Icon: Home },
      { name: "About", href: aboutRef, Icon: User },
      { name: "Projects", href: projectRef, Icon: Code },
      { name: "Contact", href: contactRef, Icon: MessageSquareMore },
   ];

   const handleDownloadAndOpen = () => {
      const fileUrl = "/doc/resume.pdf";

      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
         window.open(fileUrl, "_blank");
      }, 100);
   };

   if (!mounted) return null;

   return (
      <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{
            type: "spring",
            mass: 0.1,
            stiffness: 150,
            damping: 12,
            delay: 2,
         }}
         onMouseMove={(e) => mouseX.set(e.pageX)}
         onMouseLeave={() => mouseX.set(Infinity)}
         className="border-glassy mt-5 w-fit fixed inset-x-0 top-0 z-30 mx-auto max-w-4xl flex items-center gap-1 rounded-full border p-1 px-4 backdrop-blur-lg"
      >
         {navigations.map((nav) => (
            <DockItem
               key={nav.name}
               name={nav.name}
               Icon={nav.Icon}
               mouseX={mouseX}
               onClick={() => handleScroll(nav.href)}
            />
         ))}
         <div className="bg-glassy mx-2 h-6 w-px rounded-full" />

         <DockItem
            name="Resume"
            Icon={File}
            mouseX={mouseX}
            onClick={handleDownloadAndOpen}
         />

         <div className="bg-glassy mx-2 h-6 w-px rounded-full" />

         <DockItem
            name={ThemeName}
            Icon={ThemeIcon}
            mouseX={mouseX}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         />
      </motion.nav>
   );
}

interface DockItemProps {
   name: string;
   Icon: React.ComponentType<LucideProps>;
   mouseX: MotionValue<number>;
   onClick?: () => void;
}

const DockItem = ({ name, Icon, mouseX, onClick }: DockItemProps) => {
   const ref = useRef<HTMLButtonElement>(null);
   const [isHovered, setIsHovered] = useState(false);
   const isMobile = useIsMobile();

   const distanceCalc = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
      return val - bounds.x - bounds.width / 2;
   });

   const DEFAULT_ICON_SIZE = 40;
   const MAGNIFIED_ICON_SIZE = 60;
   const DISTANCE = 140;

   const widthSync = useTransform(
      distanceCalc,
      [-DISTANCE, 0, DISTANCE],
      [DEFAULT_ICON_SIZE, MAGNIFIED_ICON_SIZE, DEFAULT_ICON_SIZE],
   );

   const width = useSpring(widthSync, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   });

   return (
      <motion.button
         ref={ref}
         style={{ width: isMobile ? "" : width }}
         onMouseEnter={() => !isMobile && setIsHovered(true)}
         onMouseLeave={() => !isMobile && setIsHovered(false)}
         onClick={onClick}
         className="relative group flex cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-3 outline-none transition-shadow"
      >
         <AnimatePresence>
            {isHovered && (
               <motion.div
                  onMouseEnter={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: -10, scale: 0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0 }}
                  className="bg-foreground text-background absolute top-full left-1/2 mt-2 -translate-x-1/2 transform rounded-md px-2 py-1 text-xs font-medium shadow-sm pointer-events-none z-50"
               >
                  {name}
               </motion.div>
            )}
         </AnimatePresence>
         <Icon
            className={cn(
               "size-4.5 drop-shadow transition-all duration-200 group-active:scale-85",
               {
                  "size-5": isHovered,
               },
            )}
         />
      </motion.button>
   );
};
