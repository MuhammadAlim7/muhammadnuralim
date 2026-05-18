import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const formatDate = (dateString: string): string => {
   const date = new Date(dateString);

   const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
   };

   return date.toLocaleDateString("en-US", options);
};

export const isMobileDevice = (): boolean => {
   if (typeof window === "undefined" || typeof navigator === "undefined") {
      return false;
   }

   const nav = navigator as Navigator & {
      userAgentData?: { mobile: boolean };
   };

   if (nav.userAgentData?.mobile) {
      return true;
   }

   const ua = nav.userAgent;
   const isMobileUA =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
   if (isMobileUA) {
      return true;
   }

   const isTouch = "ontouchstart" in window || nav.maxTouchPoints > 0;
   return isTouch;
};
