import Link from "next/link";
import {
   NextJsIcon,
   TailwindIcon,
   MotionIcon,
   TypeScriptIcon,
} from "@/app/Icons/Techicons";

export default function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className="mt-20 bg-gradient-to-t from-black/15 to-transparent pb-8">
         <div className="mx-auto max-w-4xl px-6 pt-8 md:flex md:items-center md:justify-between lg:px-8">
            <div className="mt-8 md:order-1 md:mt-0">
               <div className="mb-4 flex flex-col space-y-2">
                  <span className="text-foreground text-xl font-bold">
                     Built with.
                  </span>
                  <div className="flex space-x-3">
                     <Link
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <NextJsIcon className="text-foreground hover:text-foreground size-6 transition-colors" />
                     </Link>
                     <Link
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <TypeScriptIcon className="text-foreground hover:text-foreground size-6 transition-colors" />
                     </Link>
                     <Link
                        href="https://tailwindcss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <TailwindIcon className="text-foreground hover:text-foreground size-6 transition-colors" />
                     </Link>
                     <Link
                        href="https://motion.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <MotionIcon className="text-foreground hover:text-foreground size-6 transition-colors" />
                     </Link>
                  </div>
               </div>
               <p className="text-foreground text-xs leading-5 font-medium md:text-left">
                  &copy; {currentYear} Muhammad Nur Alim. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
