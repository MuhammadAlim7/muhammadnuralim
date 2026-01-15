export type ProjectCategory = "Web" | "UI/UX" | "Data/Finance";

export interface Project {
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

export const data: Project[] = [
   {
      title: "App E-Commerce",
      date: "2023-01-15",
      images: "ecommerce.png",
      languages: [
         { name: "CodeIgniter" },
         { name: "PHP" },
         { name: "Javascript" },
         { name: "Bootstrap" },
      ],
      description:
         "ILorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, similique. Ipsam dignissimos aut incidunt mollitia sed, rerum perferendis nobis assumenda.",
      sourcecode: "",
      livedemo: "",
      category: "Web",
   },
   {
      title: "Student Search Web",
      date: "2024-08-20",
      images: "studentsearch.png",
      languages: [
         { name: "Next.js" },
         { name: "Tailwind CSS" },
         { name: "Cheerio" },
         { name: "TypeScript" },
         { name: "Framer Motion" },
      ],
      description:
         "Project web scraping dasar yang saya buat menggunakan Next.js, Tailwind CSS, dan Cheerio. Aplikasi ini memungkinkan pengguna untuk mencari data mahasiswa ABM langsung dari sistem informasi kampus melalui form pencarian yang dilengkapi validasi input. Proyek ini juga menjadi latihan implementasi scraping server-side dengan Next.js API routes, serta menampilkan hasil pencarian secara real-time dengan antarmuka yang responsif dan sederhana.",
      sourcecode: "https://github.com/MuhammadAlim7/CariMahasiswaABM",
      livedemo: "https://cari-mahasiswa-abm.vercel.app/",
      category: "Web",
   },
   {
      title: " Food Order Mobile App UI/UX",
      date: "2024-03-10",
      images: "foodieid.png",
      languages: [{ name: "Figma" }, { name: "UI/UX Design" }],
      description: "",
      sourcecode: "https://github.com/MuhammadAlim7/Aplikasi-Pembayaran-SPP",
      livedemo:
         "https://www.figma.com/design/pC9bQMSrnAXzGX0S1KoEYl/Final-Project---Lumoshive-Academy?node-id=45-262&p=f&t=1vvmRaBQBOnC2I16-0",
      category: "UI/UX",
   },
   {
      title: "Spotify Mobile App Clone UI/UX",
      date: "2024-03-25",
      images: "spotifyclone.png",
      languages: [{ name: "Figma" }, { name: "UI/UX Design" }],
      description: "",
      sourcecode:
         "https://www.figma.com/design/MsP5vkMDHZdMZFFJRsiHan/Muhammad-Nur-Alim---Lumoshive-UI-UX?node-id=47-235&t=GgXE6z4UxJa0VIWd-1",
      livedemo: "",
      category: "UI/UX",
   },
   {
      title: "Kalkulator BMI",
      date: "2024-08-05",
      images: "bmicalc.png",
      languages: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
      description:
         "Project RevoU Fundamental Course - JavaScript, HTML, dan CSS membangun aplikasi web yang interaktif dan user-friendly. Aplikasi ini memiliki fitur untuk menghitung BMI (Body Mass Index), yang membantu pengguna mengetahui apakah berat badan mereka termasuk kurang, ideal, atau berlebih.",
      sourcecode:
         "https://github.com/revou-fundamental-course/5-aug-24-MuhammadAlim7",
      livedemo:
         "https://revou-fundamental-course.github.io/5-aug-24-MuhammadAlim7/",
      category: "Web",
   },
   {
      title: "Student Payment Portal Application",
      date: "2023-03-18",
      images: "studentpay.png",
      languages: [
         { name: "PHP" },
         { name: "MySQL" },
         { name: "JavaScript" },
         { name: "Bootstrap" },
      ],
      description:
         "Ini adalah proyek Ujian Kompetensi Keahlian (UKK) saya saat SMK dalam jurusan Rekayasa Perangkat Lunak. Aplikasi ini dibuat menggunakan PHP Native (tanpa framework) dan bertujuan untuk membantu pengelolaan serta pencatatan pembayaran SPP (Sumbangan Pembinaan Pendidikan) di lingkungan sekolah.",
      sourcecode: "",
      livedemo: "",
      category: "Web",
   },
   {
      title: "Cars Catalog Mobile App UI/UX ",
      date: "2022-08-12",
      images: "carscatalog.png",
      languages: [{ name: "Figma" }, { name: "UI/UX Design" }],
      description: "",
      sourcecode:
         "https://www.figma.com/design/sdlqCYQDGkOSoAThA9hDlZ/Design_mobile_app_temamobil_dan_toko.Muhammad_Nur_Alim_XI_RPL_2-24.nama_app-kuruma-?node-id=0-1&t=eCD9F7j3t9ppLMn8-0",
      livedemo: "",
      category: "UI/UX",
   },
   {
      title: "Online Food Ordering Mobile App UI/UX",
      date: "2022-05-22",
      images: "onlinefood.png",
      languages: [{ name: "Figma" }, { name: "UI/UX Design" }],
      description: "",
      sourcecode:
         "https://www.figma.com/design/HjmZsop5CBgLWcCTclQC5i/MUHAMMAD-NUR-ALIM-XIRPL2-24?node-id=0-1",
      livedemo: "",
      category: "UI/UX",
   },
   {
      title: "myFirst ReactApp ",
      date: "2024-07-14",
      images: "reactviteportfolio.png",
      languages: [
         { name: "React.js" },
         { name: "Tailwind CSS" },
         { name: "Framer Motion" },
         { name: "JavaScript" },
      ],
      description:
         "Situs portofolio pribadi saya yang dibangun menggunakan React.js, TailwindCSS, dan Framer Motion. Website ini dirancang sebagai media personal branding untuk menampilkan profil, keahlian, serta proyek-proyek saya di bidang Frontend Development dan UI/UX Design. Tampilan dibuat modern, responsif, dan interaktif untuk memberikan pengalaman pengguna yang optimal.",
      sourcecode: "https://github.com/MuhammadAlim7/muhammadalim7.github.io",
      livedemo: "https://muhammadalim7.github.io/",
      category: "Web",
   },
   {
      title: "MovieApp: Netplik",
      date: "2024-09-08",
      images: "netplik.png",
      languages: [
         { name: "Next.js" },
         { name: "Tailwind CSS" },
         { name: "TypeScript" },
         { name: "Framer Motion" },
      ],
      description: "",
      sourcecode: "",
      livedemo: "",
      category: "Web",
   },
];
[];

export const formatDate = (dateString: string): string => {
   const date = new Date(dateString);

   const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
   };

   return date.toLocaleDateString("en-US", options);
};
