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
    name: "ANNZ",
    image: "/annz-logo.png",
    alt: "ANNZ logo",
    website: "https://annztech.com/" // Update this with the actual website
  },
  {
    name: "Mentron",
    image: "/mentron_main.png",
    alt: "Mentron logo",
    website: "https://www.mentron.in/ " // Update this with the actual website
  }
];

// Gold Sponsors (Secondary sponsors)
export const goldSponsors: Sponsor[] = [
  {
    name: "ANT",
    image: "/ANT-Logo.png",
    alt: "ANT logo",
    website: "https://www.antsolution.in/"
  },
  {
    name: "Icanio",
    image: "/icanio.jpg",
    alt: "Icanio logo",
    website: "https://icanio.com" // Update this with the actual website
  },
  {
    name: "SS",
    image: "/sslogo.jpg",
    alt: "SS logo",
    website: "https://example.com" // Update this with the actual website
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
    website: "https://discord.gg/pMsgBVEa"
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
