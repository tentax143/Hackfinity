export interface TeamMember {
  name: string;
  role: string;
  department?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

export interface Coordinator {
  name: string;
  role: string;
  department?: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

// Head (Admin)
export const headAdmin: Coordinator[] = [
  {
    name: "Dr. M. Kaliappan",
    role: "Convener",
    department: "B.E., M.E., Ph.D., Professor and Head"
  },
  {
    name: "Dr. E. Mariappan",
    role: "Organizer Secretary",
    department: "B.E., M.E., Ph.D. Associate Professor"
  }
];

// Staff Coordinators (Admin)
export const staffCoordinators: Coordinator[] = [
  {
    name: "Dr. S. Selva Birundha",
    role: "Staff Coordinator",
    department: "B.E., M.Tech., Ph.D. Associate Professor"
  },
  {
    name: "Mr. M. Ramnath",
    role: "Staff Coordinator",
    department: "B.Tech., M.E."
  },
  {
    name: "Mr. P. Vetrivel",
    role: "Staff Coordinator",
    department: "B.E., M.E."
  },
  {
    name: "Mr. R. Muthu Eshwaran",
    role: "Staff Coordinator",
    department: "B.E., M.E."
  }
];

// Event Coordinators (Admin)
export const eventCoordinators: TeamMember[] = [
  {
    name: "B. Manish Kumar",
    role: "Admin",
    department: "III-A Admin"
  },
  {
    name: "Delight Cherubino I",
    role: "Admin & Finance",
    department: "III-A Admin & Finance"
  },
  {
    name: "Muthumani Raj S",
    role: "Admin & Operations Coordinator",
    department: "III-A Admin & Operations"
  },
  {
    name: "R. B. Vishal",
    role: "Documentation and General Coordinator",
    department: "III-A Documentation"
  },
  {
    name: "R. Sanjay",
    role: "Event Management Organizer",
    department: "III-A Event Management"
  },
  {
    name: "ATS",
    role: "Admin & Finance",
    department: "IV-Admin & Finance"
  }
];

// Neotric AI Association Members
export const neotricMembers: TeamMember[] = [
  {
    name: "Mr. P. Vetrivel",
    role: "Staff Coordinator",
    department: "Neotric AI Association"
  },
  {
    name: "A. Harikishnan",
    role: "President",
    department: "IV A - Neotric AI Association"
  },
  {
    name: "R. Swetha",
    role: "Vice-President",
    department: "IV A - Neotric AI Association"
  },
  {
    name: "A. Karthika Lakshmi",
    role: "Secretary",
    department: "IV B - Neotric AI Association"
  },
  {
    name: "S. A. Thaarun Kumar",
    role: "Organizing Secretary",
    department: "IV B - Neotric AI Association"
  },
  {
    name: "J. Chitrakla",
    role: "Treasurer",
    department: "IV-A - Neotric AI Association"
  }
];

// Technical Team (Tech and Info Desk)
export const technicalTeam: TeamMember[] = [
  {
    name: "Subbhra Yashwanth Kanth P",
    role: "Technical Assist",
    department: "III-A Technical Team"
  },
  {
    name: "S. Harish",
    role: "Technical Assist",
    department: "III-A Technical Team"
  },
  {
    name: "A. Abirami",
    role: "Technical Lead",
    department: "IV- Technical Team"
  }
];

// General Announcement (Tech and Info Desk)
export const generalAnnouncement: TeamMember[] = [
  {
    name: "S. Shifana",
    role: "General Announcement",
    department: "IV-A General Announcement"
  },
  {
    name: "Sri Varushni M",
    role: "General Announcement",
    department: "III-A General Announcement"
  },
  {
    name: "Pon Anupriya",
    role: "General Announcement",
    department: "II-B General Announcement"
  },
  {
    name: "Nithya Shree K",
    role: "General Announcement",
    department: "IV General Announcement"
  }
];

// Media and Social Forum
export const mediaTeam: TeamMember[] = [
  {
    name: "L. Varsha",
    role: "Media Head",
    department: "IV-B Media"
  },
  {
    name: "Thangamuthumari Preethi M",
    role: "Media Lead-I",
    department: "IV-B Media"
  },
  {
    name: "P Jeya Stephen",
    role: "Media Lead-II",
    department: "III-A Media"
  },
  {
    name: "Annamalai M.R.M",
    role: "Media Assist",
    department: "II-A Media"
  },
  {
    name: "M. Unni Krishnan",
    role: "Media Assist",
    department: "II-B Media"
  }
];

// Accommodation (Accommodation and Food)
export const accommodationTeam: TeamMember[] = [
  {
    name: "S Kishorre Kumar",
    role: "Accommodation & Food (Boys)",
    department: "III-A Accommodation"
  },
  {
    name: "Amitha",
    role: "Accommodation & Food (Girls)",
    department: "III-A Accommodation"
  },
  {
    name: "Deepthi",
    role: "Accommodation & Food (Girls)",
    department: "III-A Accommodation"
  },
  {
    name: "Stephano I",
    role: "Accommodation & Food (Girls)",
    department: "IV-A Accommodation"
  },
  {
    name: "A. Karthika Lakshmi",
    role: "Secretary + Hostel",
    department: "IV B - Secretary + Hostel"
  },
  {
    name: "S. A. Thaarun Kumar",
    role: "Organizing Secretary + Hostel",
    department: "IV B - Organizing Secretary + Hostel"
  },
  {
    name: "C R Rajapande",
    role: "Hostel Management",
    department: "Hostel Management"
  }
];

// Legacy arrays for backward compatibility
export const teamMembers = [
  ...headAdmin,
  ...staffCoordinators,
  ...eventCoordinators,
  ...neotricMembers,
  ...technicalTeam,
  ...generalAnnouncement,
  ...mediaTeam,
  ...accommodationTeam
];

export const coordinators = [...headAdmin, ...staffCoordinators];
