"use client";

import {
   motion,
   useInView,
   UseInViewOptions,
   Variants,
   MotionProps,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type MarginType = UseInViewOptions["margin"];

const NEXT_COMPONENTS = {
   "next/link": Link,
   "next/image": Image,
} as const;

// Tipe Generic Polymorphic RevealProps yang dinamis & type-safe
type RevealProps<T extends React.ElementType | keyof typeof NEXT_COMPONENTS = "div"> =
   Omit<
      MotionProps & (
         T extends "next/link"
            ? React.ComponentPropsWithoutRef<typeof Link>
            : T extends "next/image"
            ? React.ComponentPropsWithoutRef<typeof Image>
            : T extends React.ElementType
            ? React.ComponentPropsWithoutRef<T>
            : Record<string, never>
      ),
      "direction" | "variants"
   > & {
      as?: T;
      variant?: Variants;
      delay?: number;
      offset?: number;
      direction?: "up" | "down" | "left" | "right";
      inView?: boolean;
      inViewMargin?: MarginType;
      atOnce?: boolean | undefined;
   };

export default function Reveal<
   T extends React.ElementType | keyof typeof NEXT_COMPONENTS = "div",
>({
   as: Component = "div" as unknown as T,
   children,
   className,
   variant,
   delay = 0,
   offset = 75,
   direction = "up",
   inView = true,
   inViewMargin = "-50px",
   atOnce = true,
   layout,
   transition,
   ...restProps
}: RevealProps<T>) {
   const ref = useRef(null);
   const inViewResult = useInView(ref, { once: atOnce, margin: inViewMargin });
   const isInView = !inView || inViewResult;
   const defaultVariants: Variants = {
      hidden: {
         ...(direction === "left" || direction === "right"
            ? { x: direction === "right" ? -offset : offset }
            : { y: direction === "down" ? -offset : offset }),
         opacity: 0,

         transition: {
            delay: 0,
         },
      },
      visible: {
         [direction === "left" || direction === "right" ? "x" : "y"]: 0,
         opacity: 1,
      },
   };

   const combinedVariants = variant || defaultVariants;

   const MotionComponent = (
      typeof Component === "string"
         ? NEXT_COMPONENTS[Component as keyof typeof NEXT_COMPONENTS]
            ? motion.create(NEXT_COMPONENTS[Component as keyof typeof NEXT_COMPONENTS] as unknown as React.ComponentType)
            : motion[Component as keyof typeof motion] || motion.div
         : motion.create(Component as React.ComponentType)
   ) as React.ElementType;

   return (
      <MotionComponent
         layout={layout}
         ref={ref}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         exit="hidden"
         variants={combinedVariants}
         transition={
            transition || {
               delay: 0.04 + delay,
               type: "spring",
               damping: 18.5,
               stiffness: 110,
            }
         }
         className={cn("", className)}
         {...restProps}
      >
         {children}
      </MotionComponent>
   );
}
