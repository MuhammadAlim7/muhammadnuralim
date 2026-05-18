"use client";

import { useState, useEffect } from "react";

import { isMobileDevice } from "@/lib/utils";

export function useIsMobile() {
   const [isMobile, setIsMobile] = useState<boolean>(false);

   useEffect(() => {
      const checkDevice = () => {
         setIsMobile(isMobileDevice());
      };

      checkDevice();

      window.addEventListener("resize", checkDevice);
      return () => window.removeEventListener("resize", checkDevice);
   }, []);

   return isMobile;
}
