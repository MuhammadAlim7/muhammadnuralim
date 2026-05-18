export type ProjectCategory = "Web" | "UI/UX" | "Data/Finance";

export interface Project {
   id: string;
   title: string;
   date: string;
   images: string;
   languages: {
      name: string;
   }[];
   description: string;
   sourcecode: string;
   livedemo: string;
   category: ProjectCategory;
}
