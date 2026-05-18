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

   if (
      "userAgentData" in navigator &&
      (navigator as any).userAgentData?.mobile
   ) {
      return true;
   }

   const ua = navigator.userAgent;
   const isMobileUA =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
   if (isMobileUA) {
      return true;
   }

   const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
   return isTouch;
};
