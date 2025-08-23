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

// Staff Coordinators
export const staffCoordinators: Coordinator[] = [
  {
    name: "Dr. M. Kaliappan",
    role: "Staff Coordinator",
    department: "Faculty"
  },
  {
    name: "Dr. E. Mariappan",
    role: "Staff Coordinator", 
    department: "Faculty"
  },
  {
    name: "Dr. S. Selva Birundha",
    role: "Staff Coordinator",
    department: "Faculty"
  },
  {
    name: "Mr. M. Ramnath",
    role: "Staff Coordinator",
    department: "Faculty"
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
  }
];

// Event Coordinators
export const eventCoordinators: TeamMember[] = [
  {
    name: "B. Manish Kumar",
    role: "Admin & Finance",
    department: "III-A Event Coordination"
  },
  {
    name: "Delight Cherubino I",
    role: "Admin & Finance",
    department: "III-A Event Coordination"
  },
  {
    name: "Muthumai Raj",
    role: "Admin-II & Guest Coordinator",
    department: "III-A Event Coordination"
  },
  {
    name: "R. B. Vishal",
    role: "Documentation and General Coordinator",
    department: "III-A Event Coordination"
  },
  {
    name: "Sanjay.R",
    role: "Event Management",
    department: "III-A Event Coordination"
  },
  {
    name: "ATS",
    role: "General Coordinator",
    department: "Event Coordination"
  }
];

// Technical Team
export const technicalTeam: TeamMember[] = [
  {
    name: "Subbhra Yashwanth Kanth P",
    role: "Technical Lead",
    department: "III-A Technical Team"
  },
  {
    name: "S. Harish",
    role: "Technical Lead",
    department: "III-A Technical Team"
  },
  {
    name: "Sanjay S",
    role: "Technical Lead",
    department: "III-A Technical Team"
  }
];

// Media and Social Forum
export const mediaTeam: TeamMember[] = [
  {
    name: "L. Varsha",
    role: "Organizing Secretary & Media",
    department: "IV-B Media Team"
  },
  {
    name: "Annamalai M.R.M",
    role: "Media Coordinator",
    department: "II-A Media Team"
  },
  {
    name: "M. Unni Krishnan",
    role: "Media Coordinator",
    department: "II-A Media Team"
  }
];

// General Announcement Team
export const announcementTeam: TeamMember[] = [
  {
    name: "S. Shifana",
    role: "General Announcement",
    department: "IV-A Announcement Team"
  },
  {
    name: "Sri Varushni M",
    role: "General Announcement",
    department: "III-A Announcement Team"
  },
  {
    name: "Pon Anupriya",
    role: "General Announcement",
    department: "II-B Announcement Team"
  },
  {
    name: "Ruba Dharshni",
    role: "General Announcement",
    department: "II-B Announcement Team"
  }
];

// Accommodation Team
export const accommodationTeam: TeamMember[] = [
  {
    name: "S Kishorre Kumar",
    role: "Accommodation & Food (Boys)",
    department: "III-A Accommodation Team"
  },
  {
    name: "Sanjay S",
    role: "Accommodation & Food (Boys)",
    department: "III-A Technical II"
  },
  {
    name: "Amitha",
    role: "Accommodation & Food (Girls)",
    department: "III-A Accommodation Team"
  },
  {
    name: "Deepthi",
    role: "Accommodation & Food (Girls)",
    department: "III-A Accommodation Team"
  }
];

// Judging Assistant Team
export const judgingTeam: TeamMember[] = [
  {
    name: "ATS",
    role: "Judging Assistant",
    department: "Judging Team"
  },
  {
    name: "R. Swetha",
    role: "Judging Assistant",
    department: "Judging Team"
  }
];

// Panel Members for Round Screening
export const panelMembers: TeamMember[] = [
  {
    name: "ATS",
    role: "Panel Member",
    department: "Round Screening Panel"
  },
  {
    name: "NITHEESH",
    role: "Panel Member",
    department: "Round Screening Panel"
  },
  {
    name: "MEHA",
    role: "Panel Member",
    department: "Round Screening Panel"
  },
  {
    name: "Mr. R. Muthu Eshwaran",
    role: "Panel Member",
    department: "Round Screening Panel"
  }
];

// Legacy arrays for backward compatibility
export const teamMembers = [
  ...neotricMembers,
  ...eventCoordinators,
  ...technicalTeam,
  ...mediaTeam,
  ...announcementTeam,
  ...accommodationTeam,
  ...judgingTeam,
  ...panelMembers
];

export const coordinators = staffCoordinators;
