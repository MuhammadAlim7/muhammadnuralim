"use client";
import { createContext, RefObject, useContext, useRef } from "react";

type SectionRefs = {
   headRef: RefObject<HTMLElement> | RefObject<null>;
   aboutRef: RefObject<HTMLElement> | RefObject<null>;
   projectRef: RefObject<HTMLElement> | RefObject<null>;
   contactRef: RefObject<HTMLElement> | RefObject<null>;
};

// Kalau nilai default-nya null
export const SectionRefContext = createContext<SectionRefs | null>(null);

export const SectionRefProvider = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const headRef = useRef(null);
   const aboutRef = useRef(null);
   const projectRef = useRef(null);
   const contactRef = useRef(null);

   return (
      <SectionRefContext.Provider
         value={{
            headRef,
            aboutRef,
            projectRef,
            contactRef,
         }}
      >
         {children}
      </SectionRefContext.Provider>
   );
};

// Custom hook biar lebih clean
export const useSectionRefs = () => {
   const context = useContext(SectionRefContext);
   if (!context) {
      throw new Error(
         "useSectionRefs must be used within a SectionRefProvider",
      );
   }
   return context;
};
