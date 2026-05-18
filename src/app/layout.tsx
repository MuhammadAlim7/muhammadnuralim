import { ThemeProvider } from "next-themes";
import { Figtree } from "next/font/google";
import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

import { SectionRefProvider } from "./hooks/SectionRefContext";
import "./globals.css";

const figtree = Figtree({
   variable: "--font-figtree",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: siteConfig.name,
   description: siteConfig.description,
   keywords: siteConfig.keywords,
   other: {
      "google-site-verification": siteConfig.googleSiteVerification,
   },
   robots: {
      index: true,
      follow: true,
   },
   authors: [{ name: siteConfig.name, url: siteConfig.url }],
   creator: siteConfig.name,
   icons: {
      icon: "/logo.svg",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={`${figtree.variable} antialiased`}>
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <SectionRefProvider>{children}</SectionRefProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
