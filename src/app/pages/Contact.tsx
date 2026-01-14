"use client";
import React from "react";
import Margin from "../components/Margin";
import TitleSection from "../components/TitleSection";
import RevealAnimation from "../components/RevealAnimation";
import {
   Facebook,
   Github,
   Instagram,
   Linkedin,
   Copy,
   Check,
   ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useSectionRefs } from "../hooks/SectionRefContext";
import { AnimatePresence, motion } from "motion/react";

const contact = [
   {
      name: "Intstagram",
      Icon: Instagram,
      href: "https://ig.me/m/muhammadnuralim7",
   },
   {
      name: "Linkedin",
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/limm7/",
   },
   { name: "Github", Icon: Github, href: "https://github.com/MuhammadAlim7" },
   {
      name: "IMPHNEN",
      Icon: Facebook,
      href: "https://www.facebook.com/groups/programmerhandal/",
   },
];

export default function Contact() {
   const { section4Ref } = useSectionRefs();
   const [copied, setCopied] = React.useState(false);

   const handleCopyEmail = async () => {
      const email = "muhammadnuralim7@gmail.com";

      try {
         // Try modern API first
         if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
         } else {
            throw new Error("Clipboard API unavailable");
         }
      } catch {
         try {
            const textArea = document.createElement("textarea");
            textArea.value = email;

            // Ensure proper selection on mobile
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            textArea.style.top = "0";
            document.body.appendChild(textArea);

            textArea.focus();
            textArea.select();

            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);

            if (successful) {
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
            }
         } catch (fallbackErr) {
            console.error("Failed to copy:", fallbackErr);
         }
      }
   };

   return (
      <Margin
         ref={section4Ref}
         id="section4"
         className="flex min-h-[80vh] flex-col justify-center"
      >
         <TitleSection
            title="Contact"
            description="Get in Touch"
            className="mb-12"
         />

         <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {/* Main CTA Card */}
            <div className="group border-glassy relative col-span-1 overflow-hidden rounded-2xl border bg-white/5 p-8 backdrop-blur-lg transition-all hover:bg-white/10 sm:col-span-2 lg:col-span-2 lg:row-span-2">
               <div className="flex h-full flex-col justify-between gap-8">
                  <div className="space-y-2">
                     <h3 className="text-secondary text-lg font-medium">
                        Let's work together
                     </h3>
                     <p className="max-w-md text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
                        Have a project in mind?
                     </p>
                  </div>
                  <div className="relative">
                     <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl transition-all group-hover:bg-blue-500/30" />
                     <button
                        onClick={handleCopyEmail}
                        className="border-glassy relative flex w-full items-center justify-between rounded-xl border bg-white/5 px-5 py-4 transition-all hover:bg-white/10 active:scale-[0.98]"
                     >
                        <div className="flex flex-col items-start">
                           <span className="text-secondary text-xs tracking-wider uppercase">
                              Mail me at
                           </span>
                           <span className="text-sm font-medium sm:text-base">
                              muhammadnuralim7@gmail.com
                           </span>
                        </div>
                        <div className="text-foreground relative grid place-items-center rounded-lg transition-colors group-hover:text-blue-400 sm:p-1">
                           <AnimatePresence mode="wait">
                              {copied ? (
                                 <motion.div
                                    key="check"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                 >
                                    <Check className="size-5" />
                                 </motion.div>
                              ) : (
                                 <motion.div
                                    key="copy"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                 >
                                    <Copy className="size-5" />
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     </button>
                  </div>
               </div>
            </div>

            {/* Social Cards */}
            {contact.map((item, index) => (
               <RevealAnimation
                  key={index}
                  delay={index * 0.1}
                  className="col-span-1"
               >
                  <Link
                     href={item.href}
                     target="_blank"
                     className="group border-glassy relative flex h-full min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl border bg-white/5 p-6 backdrop-blur-lg transition-all hover:scale-[1.02] hover:bg-white/10 active:scale-[0.98]"
                  >
                     <div className="absolute top-0 right-0 -m-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/20" />

                     <div className="text-secondary group-hover:text-foreground relative z-10 box-border w-fit rounded-full border border-white/10 p-3 transition-colors group-hover:border-white/20 group-hover:bg-white/5">
                        <item.Icon className="size-6" />
                     </div>

                     <div className="relative z-10 flex items-center justify-between">
                        <span className="text-lg font-medium">{item.name}</span>
                        <ArrowUpRight className="text-secondary group-hover:text-foreground size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                     </div>
                  </Link>
               </RevealAnimation>
            ))}
         </div>
      </Margin>
   );
}
