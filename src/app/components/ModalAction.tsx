import { Link as LinkIcon, LucideProps } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

import { Figma, Github } from "@/app/components/icons/CustomIcons";
import { cn } from "@/lib/utils";

export const getIcon = (url: string) => {
   if (url.includes("github.com")) return Github;
   if (url.includes("figma.com")) return Figma;
   return LinkIcon;
};

export interface ActionButtonProps {
   icon?: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
   >;
   title?: string;
   className?: string;
}

export function ActionButton({
   href,
   className,
   icon: Icon,
   title,
}: ActionButtonProps & React.ComponentProps<"link">) {
   return (
      <Link
         href={href as Url}
         target="_blank"
         rel="noopener noreferrer"
         onClick={(e) => {
            if (href === "") {
               e.preventDefault();
            }
         }}
         title={href == "" ? "Coming Soon" : title}
         className={cn(
            "flex items-center gap-2 text-xs leading-none font-medium md:gap-1",
            href == "" ? "cursor-not-allowed" : "cursor-pointer",
            className,
         )}
      >
         {Icon && <Icon size={18} className="text-secondary" />}
         {title}
      </Link>
   );
}
