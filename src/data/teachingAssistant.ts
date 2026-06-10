export type TeachingAssistantItem = {
  course?: string;   // 如果没有课程编号可以留空
  title: string;     // 课程名称
  term: string;      // e.g., "Fall 2025"
  role?: string;     // e.g., "Teaching Assistant"
};

export const teachingAssistant: TeachingAssistantItem[] = [
  {
    title: " - COMP3511 - Operating Systems @ HKUST",
    term: "Spring 2023, Spring 2024, Fall 2024, Fall 2025",
    role: "Teaching Assistant",
  },
  {
    title: " - COM308 - Internet Analytics @ EPFL",
    term: "Fall 2020",
    role: "Teaching Assistant",
  },
];
