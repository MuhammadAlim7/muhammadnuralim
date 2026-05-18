"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

// import { useTheme } from "next-themes";

import { useParticles } from "@/lib/particle";

export default function Background() {
   const [init, setInit] = useState(false);
   // const { theme } = useTheme();
   const configuration = useParticles();

   useEffect(() => {
      initParticlesEngine(async (engine) => {
         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   if (!init) return null;

   return (
      <Particles
         id="tsparticles"
         className="fixed inset-0 h-screen w-full"
         options={{
            ...configuration,
            // themes: theme === "dark" ? [] : [],
         }}
      />
   );
}
