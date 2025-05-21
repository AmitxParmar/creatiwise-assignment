export type Article = {
  id: string;
  title: string;
  keyword: string;
  traffic: number;
  words: number;
  createdOn: string;
  status: "generated" | "published" | "scheduled" | "archived";
};

export const dummyArticles: Article[] = [
  {
    id: "1",
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 4575,
    createdOn: "20 hours ago",
    status: "generated",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 3480,
    createdOn: "21 hours ago",
    status: "generated",
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 2676,
    createdOn: "a day ago",
    status: "published",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: 2900,
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "scheduled",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1793,
    createdOn: "3 days ago",
    status: "archived",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: 3600,
    words: 2647,
    createdOn: "5 days ago",
    status: "generated",
  },
  {
    id: "7",
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks",
    traffic: 8100,
    words: 2261,
    createdOn: "1 week ago",
    status: "published",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: 880,
    words: 1543,
    createdOn: "2 weeks ago",
    status: "generated",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1974,
    createdOn: "1 month ago",
    status: "scheduled",
  },
];
