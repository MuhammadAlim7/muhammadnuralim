"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { Particle } from "@/lib/Particle";

export default function Background() {
   const [init, setInit] = useState(false);
   const { theme } = useTheme();
   const configuration = Particle();

   // Initialize particles engine once (singleton behavior handles this safely)
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
         className="fixed inset-0 -z-10 h-screen w-full"
         options={{
            ...configuration,
            // Ensure theme is applied if needed, though usually handled via options or css
            themes: theme === "dark" ? [] : [], // basic placeholder if config has themes
         }}
      />
   );
}
