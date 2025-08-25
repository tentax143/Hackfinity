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
    role: "Hackathon TechOps Lead",
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
  ...panelMembers
];

export const coordinators = staffCoordinators;
