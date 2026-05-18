"use client";

import { SquarePlay } from "lucide-react";
import Image from "next/image";
import { Drawer } from "vaul";

import { ActionButton, getIcon } from "@/app/components/ModalAction";
import { ModalProps } from "@/app/components/Modal";
import { formatDate } from "@/lib/utils";

export default function ModalMobile({
   selectedItem: data,
   setSelectedItem,
   isOpen,
   setIsOpen,
}: ModalProps) {
   return (
      <Drawer.Root
         shouldScaleBackground
         open={isOpen}
         onOpenChange={setIsOpen}
         onAnimationEnd={(isOpen) => {
            if (!isOpen) {
               setSelectedItem(null);
            }
         }}
      >
         <Drawer.Overlay className="fixed inset-0 z-40 bg-black/80" />
         <Drawer.Portal>
            <Drawer.Content className="bg-background fixed right-0 bottom-0 left-0 z-50 mt-24 flex h-fit max-h-[80%] flex-col rounded-t-3xl outline-none">
               <div className="relative flex-1 p-4">
                  <div className="bg-outline absolute top-0 right-0 left-0 mx-auto mt-2 h-1 w-14 shrink-0 rounded-full" />
                  <div className="mx-auto mt-3 max-w-md">
                     <div className="size-full">
                        {data ? (
                           <Image
                              src={`/images/${data.images}`}
                              alt={data.title}
                              className="aspect-video size-full rounded-2xl object-cover"
                              height={720}
                              width={1280}
                           />
                        ) : (
                           <div className="bg-layer size-full rounded-2xl object-contain" />
                        )}
                     </div>
                     <Drawer.Title className="mt-4 text-2xl font-bold">
                        {data && data.title}
                     </Drawer.Title>

                     <div className="wrap flex text-sm">
                        <span className="text-secondary font-medium">
                           {data?.languages.map((l) => l.name).join(", ")}
                        </span>
                     </div>

                     <span className="text-secondary mr-1 text-sm font-medium text-nowrap">
                        {data && formatDate(data.date)}
                     </span>

                     <Drawer.Description className="text-secondary my-4 text-justify">
                        {data?.description}
                     </Drawer.Description>

                     <div className="row flex justify-end gap-3">
                        {data && (
                           <>
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
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </Drawer.Content>
         </Drawer.Portal>
      </Drawer.Root>
   );
}
