"use client";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import ModalDesktop from "@/app/components/ModalDesktop";
import ModalMobile from "@/app/components/ModalMobile";
import { Project } from "@/types";

export interface ModalProps {
   selectedItem: Project | null;
   setSelectedItem: React.Dispatch<React.SetStateAction<Project | null>>;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: ModalProps) {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   if (isDesktop) {
      return <ModalDesktop {...props} />;
   }

   return <ModalMobile {...props} />;
}
