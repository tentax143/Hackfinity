export interface Sponsor {
  name: string;
  image: string;
  alt: string;
  website?: string;
}

export interface CommunityPartner {
  icon: any;
  color: string;
  name: string;
  website?: string;
}

// Title Sponsors (Major sponsors)
export const titleSponsors: Sponsor[] = [
  {
    name: "Major Technology Company",
    image: "/attached_assets/sponsors/title-sponsors/sponsor1.png", // Update this path
    alt: "Major technology company logo",
    website: "https://example.com"
  },
  {
    name: "Innovation Startup",
    image: "/attached_assets/sponsors/title-sponsors/sponsor2.png", // Update this path
    alt: "Innovation startup logo",
    website: "https://example.com"
  }
];

// Gold Sponsors (Secondary sponsors)
export const goldSponsors: Sponsor[] = [
  {
    name: "ANT",
    image: "/ANT-Logo.png",
    alt: "ANT logo",
    website: "https://www.antsolution.in/" // Update this with the actual website
  },
  {
    name: "Software Development Company",
    image: "/attached_assets/sponsors/gold-sponsors/sponsor3.png", // Update this path
    alt: "Software development company logo",
    website: "https://example.com"
  },
  {
    name: "Cloud Services Provider",
    image: "/attached_assets/sponsors/gold-sponsors/sponsor4.png", // Update this path
    alt: "Cloud services provider logo",
    website: "https://example.com"
  },
  {
    name: "AI Company",
    image: "/attached_assets/sponsors/gold-sponsors/sponsor5.png", // Update this path
    alt: "Artificial intelligence company logo",
    website: "https://example.com"
  }
];

// Community Partners (Icons)
export const communityPartners: CommunityPartner[] = [
  { 
    icon: "Github", 
    color: "text-neon-purple", 
    name: "GitHub",
    website: "https://github.com"
  },
  { 
    icon: "MessageCircle", 
    color: "text-cyber-blue", 
    name: "Discord",
    website: "https://discord.com"
  },
  { 
    icon: "Slack", 
    color: "text-hot-pink", 
    name: "Slack",
    website: "https://slack.com"
  },
  { 
    icon: "Twitter", 
    color: "text-cyber-teal", 
    name: "Twitter",
    website: "https://twitter.com"
  }
];

// Instructions for adding sponsor images:
// 1. Place your sponsor images in: attached_assets/sponsors/
// 2. Update the image paths above to match your file names
// 3. Recommended image formats: PNG, JPG, SVG
// 4. Recommended image sizes: 200x200px minimum, 400x400px optimal
// 5. Use descriptive file names like: company-name-logo.png
