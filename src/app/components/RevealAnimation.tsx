"use client";

import {
   motion,
   useInView,
   UseInViewOptions,
   Variants,
   Transition,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

type MarginType = UseInViewOptions["margin"];

interface BlurFadeProps {
   id?: string;
   children: React.ReactNode;
   className?: string;
   variant?: {
      hidden: { y: number };
      visible: { y: number };
   };
   delay?: number;
   transition?: Transition;
   offset?: number;
   direction?: "up" | "down" | "left" | "right";
   inView?: boolean;
   inViewMargin?: MarginType;
   blur?: string;
   atOnce?: boolean | undefined;
   layout?: boolean | "position" | "size";
   props?: React.ComponentProps<typeof motion.div>;
}

export default function RevealAnimation({
   id,
   children,
   className,
   variant,
   delay = 0,
   offset = 75,
   direction = "up",
   inView = true,
   inViewMargin = "-50px",
   // blur = "6px",
   atOnce = true,
   layout,
   props,
   transition,
}: BlurFadeProps) {
   const ref = useRef(null);
   const inViewResult = useInView(ref, { once: atOnce, margin: inViewMargin });
   const isInView = !inView || inViewResult;
   const defaultVariants: Variants = {
      hidden: {
         ...(direction === "left" || direction === "right"
            ? { x: direction === "right" ? -offset : offset }
            : { y: direction === "down" ? -offset : offset }),
         opacity: 0,
         // filter: `blur(${blur})`,
         transition: {
            delay: 0,
         },
      },
      visible: {
         [direction === "left" || direction === "right" ? "x" : "y"]: 0,
         opacity: 1,
         // filter: "blur(0px)",
      },
   };
   const combinedVariants = variant || defaultVariants;
   return (
      <motion.div
         layout={layout}
         id={id}
         ref={ref}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         exit="hidden"
         variants={combinedVariants}
         transition={
            transition || {
               delay: 0.04 + delay,
               type: "spring",
               damping: 17,
               stiffness: 110,
               // filter: {
               //    delay: 0.04 + delay,
               //    duration: 0.4,
               //    ease: "easeOut",
               // },
            }
         }
         className={cn("", className)}
         {...props}
      >
         {children}
      </motion.div>
   );
}
