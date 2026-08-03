export const site = {
  name: "Joe Abass Bangura",
  shortName: "Joe Abass",
  tagline: "Building businesses. Growing leaders. Shaping Africa's future.",
  description:
    "Joe Abass Bangura is a serial entrepreneur, executive and mentor from Sierra Leone. Host of the JAB Podcast. Weekly insights on leadership, business and Africa.",
  url: "https://joeabass.com",
  email: "hello@joeabass.com",
  youtube: "https://www.youtube.com/@JAB-Podcast01",
  linkedin: "https://www.linkedin.com/company/jab-show",
  x: "https://x.com/",
};

/**
 * Placeholder editorial photography from Unsplash — swap every URL here for
 * Joe's real photography once available. Nothing else needs to change.
 */
function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  hero: '/images/joereflect.png',
  about: '/images/joeabassmdrole.jpg',
  speaking: '/images/invitejoetospeak.jpg',
  podcast: '/images/jabonjabshow.png',
  podcastMic: unsplash("photo-1516450360452-9312f5e86fc7"),
  mentorship: '/images/personalized.jpeg',
  meeting: '/images/scale.jpeg',
  companies: '/images/joeprofessional.jpg',
  handshake: unsplash("photo-1600880292089-90a7e086ee0c"),
  youth: '/images/mentorship.jpeg',
};

export const avatars = {
  founder: '/images/salton.png',
  executive: unsplash("photo-1573497491765-dccce02b29df", 200),
  mentee: '/images/david.png'
};

export const metrics = [
  { value: 20, suffix: "+", label: "Years building businesses" },
  { value: 100, suffix: "+", label: "Podcast conversations published" },
  { value: 0, display: "Millions", label: "Customers served" },
  { value: 0, display: "Thousands", label: "Lives impacted through mentorship" },
  { value: 0, display: "Multiple", label: "Ventures founded and advised" },
  { value: 2, suffix: "", label: "National telecom operations led" },
];

export const logos = ["Africell", "SierraTel", "ACTB", "Startup Bodyshop", "LBD Group", "JAB Podcast"];

export const timeline = [
  {
    era: "Beginnings",
    title: "Rooted in Sierra Leone",
    body: "Raised with the conviction that where you start does not decide where you finish. The discipline, faith and work ethic formed here still shape every decision.",
  },
  {
    era: "The Builder",
    title: "Entrepreneurship, the hard way",
    body: "Founded and grew ventures across sectors — learning what textbooks skip: how to sell, how to endure, and how to build teams in markets where nothing is handed to you.",
  },
  {
    era: "The Executive",
    title: "Leading at national scale",
    body: "Senior leadership at Africell, one of Africa's fastest-growing telecom groups, and executive stewardship of SierraTel — responsible for infrastructure millions depend on.",
  },
  {
    era: "The Mentor",
    title: "Multiplying through people",
    body: "Through the JAB Podcast and one-on-one mentorship, Joe invests in the founders, students and professionals building Sierra Leone's next chapter.",
  },
  {
    era: "Today",
    title: "Building what lasts",
    body: "Operator, investor and voice for a generation of African builders — sharing what he learns, every week, with anyone willing to do the work.",
  },
];

export const expertise = [
  { icon: "Compass", title: "Leadership", body: "Leading institutions and teams through complexity and change." },
  { icon: "TrendingUp", title: "Business growth", body: "Building companies that survive and scale in African markets." },
  { icon: "Radio", title: "Telecommunications", body: "Two decades inside the infrastructure connecting millions." },
  { icon: "Lightbulb", title: "Innovation", body: "New playbooks for problems the old ones never solved." },
  { icon: "Cpu", title: "Digital transformation", body: "Moving national institutions into the digital era." },
  { icon: "Rocket", title: "Entrepreneurship", body: "The honest version of the founder's journey." },
  { icon: "Users", title: "Youth development", body: "Mentorship and opportunity for the next generation." },
  { icon: "Landmark", title: "Investment", body: "Backing builders with capital, counsel and networks." },
  { icon: "Globe", title: "Africa", body: "A continent-first view of business and its future." },
];

export const testimonials = [
  {
    quote:
      "From the founding of idtlabs to now mikashbox, Joe has been a constant source of guidance and mentorship.",
    name: "Salton Massally",
    role: "Founder & CEO, Mikashbox",
    avatar: avatars.founder,
  },
  {
    quote:
      "Placeholder — an executive peer on what it is like to work alongside Joe at national scale.",
    name: "Executive name",
    role: "Role, Organisation",
    avatar: avatars.executive,
  },
  {
    quote:
      "Joe's mentorship isn't based on theory, it's practical. He puts you in the arena of real work, and challenges you to grow.",
    name: "David Conteh",
    role: "Founder @ Tenacity",
    avatar: avatars.mentee,
  },
];

export const speakingTopics = [
  { title: "Corporate leadership", format: "Keynote" },
  { title: "Entrepreneurship in African markets", format: "Keynote · Panel" },
  { title: "Digital transformation & telecoms", format: "Executive session" },
  { title: "Innovation under constraint", format: "Keynote" },
  { title: "Youth and the future of work", format: "Keynote · Fireside" },
  { title: "Corporate strategy", format: "Executive session" },
];

export const audienceSegments = [
  {
    title: "Founders Kickstarting Their Journey",
    body: "You don't need permission, capital, or a plan. You need to start.",
    image: images.mentorship,
    href: "https://startupbodyshop.com",
  },
  {
    title: "Entrepreneurs Ready to Scale",
    body: "Become the operator capable of building a business that doesn't need you in every room.",
    image: images.meeting,
    href: "https://startupbodyshop.com",
  },
  {
    title: "Young Adults",
    body: "Free mentorship and events for the next generation ready to lead, build, and grow.",
    image: images.youth,
    href: "/podcast",
    cta: "Join free",
  },
];

{/*
    title: "Executives Leading Change",
    body: "Lead transformation at the scale of a nation — not just a department.",
    image: images.companies,
    href: "/speaking",
  */}

export const audiences = [
  "Founders",
  "Executives",
  "Students",
  "Corporates",
  "Government",
  "Media",
  "Investors",
  "Young entrepreneurs",
];

export const companies = [
  {
    role: "Executive leadership",
    name: "Africell",
    body: "Senior leadership at one of Africa's fastest-growing telecom groups, serving millions of subscribers.",
  },
  {
    role: "Executive stewardship",
    name: "SierraTel",
    body: "Guiding the national operator's transformation under Africell's management.",
  },
  {
    role: "Founder & host",
    name: "The JAB Podcast",
    body: "A media platform documenting the builders shaping Africa's future.",
  },
  {
    role: "Ventures & advisory",
    name: "Startup Bodyshop · LBD",
    body: "Backing and building alongside the next generation of Sierra Leonean companies.",
  },
];

export const episodes = [
  { title: "Featured conversation — replace with real episode", guest: "Guest name", category: "Leadership", href: site.youtube, thumb: images.podcast, featured: true },
  { title: "Episode placeholder two", guest: "Guest name", category: "Entrepreneurship", href: site.youtube, thumb: images.podcastMic },
  { title: "Episode placeholder three", guest: "Guest name", category: "Africa", href: site.youtube, thumb: images.meeting },
  { title: "Episode placeholder four", guest: "Guest name", category: "Innovation", href: site.youtube, thumb: images.companies },
  { title: "Episode placeholder five", guest: "Guest name", category: "Leadership", href: site.youtube, thumb: images.mentorship },
  { title: "Episode placeholder six", guest: "Guest name", category: "Youth", href: site.youtube, thumb: images.handshake },
];

export const episodeCategories = ["All", "Leadership", "Entrepreneurship", "Africa", "Innovation", "Youth"];
