export type Article = {
  id: string;
  title: string;
  keyword: string;
  traffic: number;
  words: number;
  createdOn: string;
  status: "generated" | "published" | "scheduled" | "archived";
  content: string;
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
    content:
      "League of Legends is a complex game that requires dedication and practice to master. The first step to improving is understanding the basics of your chosen champion. Focus on last-hitting minions, maintaining proper positioning, and learning when to engage or disengage from fights. Watch professional players and analyze their decision-making process. Remember, consistent practice and a positive mindset are key to climbing the ranked ladder.",
  },
  {
    id: "2",
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 3480,
    createdOn: "21 hours ago",
    status: "generated",
    content:
      "Last hitting is a fundamental skill in League of Legends that separates good players from great ones. The key is to time your attacks to land the final blow on minions, securing the gold. Practice in custom games without any items or runes to perfect your timing. Pay attention to your champion's attack animation and projectile speed. As you improve, you'll be able to last hit while also harassing your opponent.",
  },
  {
    id: "3",
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends",
    traffic: 2240000,
    words: 2676,
    createdOn: "a day ago",
    status: "published",
    content:
      "Teamwork is essential in League of Legends. Always communicate with your team using pings and chat. Share vision control by placing wards strategically. Coordinate objectives like Dragon and Baron with your team. Remember to peel for your carries in team fights and focus on protecting the most valuable members of your team. A well-coordinated team can overcome individual skill differences.",
  },
  {
    id: "4",
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant",
    traffic: 2900,
    words: 2408,
    createdOn: "1 Oct, 24",
    status: "scheduled",
    content:
      "Virtual executive assistants have become indispensable in today's remote work environment. They handle everything from scheduling meetings to managing emails and coordinating projects. The best services offer 24/7 availability, multilingual support, and integration with popular business tools. When choosing a service, consider their experience, response time, and ability to handle your specific business needs.",
  },
  {
    id: "5",
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1793,
    createdOn: "3 days ago",
    status: "archived",
    content:
      "Unlimited graphic design services provide businesses with consistent, high-quality design work without the overhead of an in-house team. These services typically offer unlimited revisions and quick turnaround times. They're perfect for businesses that need regular design updates for social media, marketing materials, and website content. The subscription model makes it easy to budget for design needs.",
  },
  {
    id: "6",
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods",
    traffic: 3600,
    words: 2647,
    createdOn: "5 days ago",
    status: "generated",
    content:
      "Amazon sellers have several options for receiving payments. The most popular method is direct deposit to a bank account, which typically takes 1-3 business days. Amazon Pay is another convenient option that allows for instant transfers to your bank account. For international sellers, Amazon's Global Selling program offers multiple currency options and competitive exchange rates.",
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
    content:
      "Backlinks are links from other websites that point to your site. They're crucial for SEO because search engines view them as votes of confidence. Quality backlinks from authoritative sites can significantly boost your search rankings. Focus on creating valuable content that others want to link to naturally. Avoid spammy link-building tactics, as they can harm your site's reputation.",
  },
  {
    id: "8",
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software",
    traffic: 880,
    words: 1543,
    createdOn: "2 weeks ago",
    status: "generated",
    content:
      "AI-powered SEO tools are revolutionizing how we approach search engine optimization. These tools can analyze content, suggest improvements, and predict ranking potential. The best ones offer features like keyword research, content optimization, and competitor analysis. When choosing an AI SEO tool, consider your specific needs, budget, and the tool's ability to integrate with your existing workflow.",
  },
  {
    id: "9",
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services",
    traffic: 390,
    words: 1974,
    createdOn: "1 month ago",
    status: "scheduled",
    content:
      "Reliable graphic design services are essential for maintaining a consistent brand image. The best services offer dedicated designers who understand your brand's style and requirements. They should provide quick turnaround times and unlimited revisions to ensure you're completely satisfied with the final product. Look for services that offer a variety of design types, from social media graphics to print materials.",
  },
];
