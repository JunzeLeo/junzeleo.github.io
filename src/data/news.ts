// src/data/news.ts
export type NewsItem = {
  date: string;        // 用于排序，比如 "2025-11"
  text: string;        // 支持 Markdown
  pinned?: boolean;    // 置顶可选
};

export const news: NewsItem[] = [
  {
    date: "2026-06",
    pinned: true,
    text: `[06/2026] 🥳 Passed my PhD Thesis Proposal Defense! `,
  },
  {
    date: "2026-05",
    pinned: true,
    text: `[05/2026] 👋🏻 Finished my internship at MSRA. Many thanks for my creative team!`,
  },
  {
    date: "2026-05",
    pinned: true,
    text: `[05/2026] 🏅 Received HKUST RedBird Academic Excellence Award! `,
  },
  {
    date: "2026-04",
    pinned: true,
    text: `[04/2026] 🇪🇸 Attended CHI26 in Barcelona, and presented my work in Dissertation Research Roundtable. Enjoyable experience to meet with old friends and new ones!`,
  },
  {
    date: "2026-03",
    pinned: true,
    text: `[03/2026] 🎉 Our paper on transforming human pragmatic language skills to conversational agent is **accepted by CHI'26**!`,
  },
  {
    date: "2026-02",
    text: `[03/2026] 🚀 Started my internship at MSRA!`,
  },
  {
    date: "2026-02",
    text: `[03/2026] 🎉 Our paper on collective memory co-contribution is **accepted by GROUP'27**!`,
  },
  {
    date: "2026-01",
    text: `[03/2026] 🎉 Our paper on training people to provide emotionally supportive responses is **accepted by IUI'26**!`,
  },
  {
    date: "2025-12",
    text: `[11/2025] ✈️ Visited the Future Lab in Tsinghua Univeristy!`,
  },
  {
    date: "2025-07",
    text: `[07/2025] 🏅 Received HKUST RedBird Academic Excellence Award!`,
  },
  {
    date: "2025-04",
    text: `[04/2025] 🇯🇵 Attended CHI25 in Yokohama, and presented my work, InsightBridge!`,
  },
  {
    date: "2025-03",
    text: `[03/2025] 🎉 Our paper on exploring the interaction inception of TikTok refugees is **accepted by CHI'25 Poster**!`,
  },
  {
    date: "2025-03",
    text: `[03/2025] 🎉 Our paper, InsightBridge, is **accepted by CHI'25**!`,
  },
  {
    date: "2024-05",
    text: `[05/2024] 🇺🇸 Attended CHI24 in Hawaii, and presented my work, DiaryHelper!`,
  },
  {
    date: "2024-04",
    text: `[04/2024] 🥳 Passed my PhD Qualifying Exam and became a Phd Candidate!`,
  },
  {
    date: "2024-03",
    text: `[03/2024] 🎉 Our paper on designing conversational agents for NCD screening is **accepted by CHI'24**!`,
  },
  {
    date: "2024-03",
    text: `[03/2024] 🎉 Our paper, DiaryHelper, is **accepted by CHI'24**!`,
  },
  {
    date: "2022-09",
    text: `[09/2022] 🇭🇰 Began my PhD journey at HKUST!`,
  },

];
