export type AcademicServiceItem = {
  title: string;
  description?: string;
  pinned?: boolean;
  date?: string; // e.g., "2026"
};

export const academicServices: AcademicServiceItem[] = [
  // ---------------------
  // Committee Member
  // ---------------------
  // {
  //   title: "CHI 2026 Poster AC",
  //   description: "Committee Member",
  // },
  // {
  //   title: "CHI 2025 LBW AC",
  //   description: "Committee Member",
  // },

  // ---------------------
  // Reviewer
  // ---------------------
  {
    title: "TOCHI Distinguished Reviewer Board",
    description: "Reviewer (Journal)",
  },
  {
    title: "CSCW 2026",
    description: "Reviewer",
  },
  {
    title: "CHI 2026",
    description: "Reviewer",
  },
  {
    title: "CHI 2025",
    description: "Reviewer",
  },
  {
    title: "UIST 2025",
    description: "Reviewer",
  },
  {
    title: "CSCW 2025",
    description: "Reviewer",
  },
  {
    title: "CHI 2024",
    description: "Reviewer",
  },
  {
    title: "CSCW 2024",
    description: "Reviewer",
  },
  {
    title: "NAACL 2024",
    description: "Reviewer",
  },
  {
    title: "ChineseCHI 2022",
    description: "Reviewer",
  },
];
