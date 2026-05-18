"use client";
import { AnimatePresence, motion } from "motion/react";
import { SquarePlay, X } from "lucide-react";
import { useEffect } from "react";
import Image from "next/image";

import { ActionButton, getIcon } from "@/app/components/ModalAction";
import { ModalProps } from "@/app/components/Modal";
import { formatDate } from "@/lib/utils";

export default function ModalDesktop({
   selectedItem: data,
   setSelectedItem,
   isOpen,
   setIsOpen,
}: ModalProps) {
   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "";
      }

      return () => {
         document.body.style.overflow = "";
      };
   }, [isOpen]);

   function handleClose() {
      setIsOpen(false);
   }

   return (
      <AnimatePresence
         onExitComplete={() => {
            if (!isOpen) {
               setSelectedItem(null);
            }
         }}
      >
         {data && isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
               {/* Backdrop */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                     ease: "easeInOut",
                     duration: 0.4,
                  }}
                  className="absolute inset-0 bg-black/80"
                  onClick={handleClose}
               />

               {/* Modal Content */}
               <motion.div
                  initial={{ opacity: 0, y: 450, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1.0 }}
                  exit={{ opacity: 0, y: 450, scale: 0.99 }}
                  transition={{
                     type: "spring",
                     damping: 14,
                     stiffness: 100,
                  }}
                  className="bg-background relative mx-4 h-4/6 w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl"
               >
                  {/* Close Button */}
                  <button
                     onClick={handleClose}
                     className="text-secondary absolute top-6 right-4 z-10 cursor-pointer rounded-full p-2 transition-colors"
                     aria-label="Close modal"
                  >
                     <X className="h-6 w-6" />
                  </button>

                  {/* Modal Body */}
                  <div className="md:row flex h-full flex-row">
                     {/* Left Side - Image */}
                     <div className="md:w-3/2">
                        <div className="relative size-full bg-black">
                           <Image
                              src={`/images/${data.images}`}
                              alt={data.title}
                              className="size-full object-contain"
                              width={1200}
                              height={1600}
                           />
                        </div>
                     </div>

                     {/* Right Side - Content */}
                     <div className="border-outline flex h-full w-full flex-col justify-center border-l p-8">
                        <div className="flex h-full flex-col">
                           {/* Title */}
                           <h3 className="text-3xl font-bold">{data.title}</h3>
                           <div className="wrap flex text-sm">
                              <span className="text-secondary font-medium">
                                 {data?.languages.map((l) => l.name).join(", ")}
                              </span>
                           </div>
                           <span className="text-secondary mr-1 mb-6 text-sm font-medium text-nowrap">
                              {formatDate(data.date)}
                           </span>

                           {/* Description */}
                           <div className="scrollbar-hidden 1 mb-6 overflow-y-auto">
                              <p className="text-secondary mb-4 text-justify text-sm leading-relaxed">
                                 {data.description}
                              </p>
                           </div>

                           {/* Action Buttons */}
                           <div className="row mt-auto flex justify-end gap-3">
                              <ActionButton
                                 href={data.sourcecode}
                                 icon={getIcon(data.sourcecode)}
                                 title="Source Code"
                              />
                              <ActionButton
                                 href={data.livedemo}
                                 icon={SquarePlay}
                                 title="Live Demo"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
}
