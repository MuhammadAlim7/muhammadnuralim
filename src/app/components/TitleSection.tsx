import RevealAnimation from "@/app/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
   title: string;
   description: string;
}

export default function TitleSection({
   title,
   description,
   className,
}: SectionTitleProps & React.ComponentProps<"div">) {
   return (
      <div
         className={cn(
            "grid max-w-2xl gap-y-1 sm:mx-auto sm:text-center",
            className,
         )}
      >
         <RevealAnimation
            as="h1"
            className="text-secondary text-base font-semibold tracking-widest uppercase"
         >
            {title}
         </RevealAnimation>
         <RevealAnimation
            as="span"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
         >
            {description}
         </RevealAnimation>
      </div>
   );
}
