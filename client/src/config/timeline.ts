import { Calendar, Users, Code, Trophy, Award, FileText, Presentation, Home } from "lucide-react";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
  startDate?: string; // For date range events
  endDate?: string;   // For date range events
}

// Helper function to parse date strings
export const parseDate = (dateStr: string): Date => {
  const [month, day] = dateStr.split(' ');
  const currentYear = new Date().getFullYear();
  const monthMap: { [key: string]: number } = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  return new Date(currentYear, monthMap[month], parseInt(day));
};

// Helper function to get event date for comparison
export const getEventDate = (event: TimelineEvent): Date => {
  if (event.startDate) {
    return parseDate(event.startDate);
  }
  return parseDate(event.date);
};

// Helper function to calculate timeline progress
export const getTimelineProgress = (events: TimelineEvent[]): number => {
  const now = new Date();
  const sortedEvents = [...events].sort((a, b) => getEventDate(a).getTime() - getEventDate(b).getTime());
  
  const firstEventDate = getEventDate(sortedEvents[0]);
  const lastEventDate = getEventDate(sortedEvents[sortedEvents.length - 1]);
  
  if (now < firstEventDate) return 0;
  if (now > lastEventDate) return 100;
  
  const totalDuration = lastEventDate.getTime() - firstEventDate.getTime();
  const elapsed = now.getTime() - firstEventDate.getTime();
  
  return Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
};

// Helper function to get current event
export const getCurrentEvent = (events: TimelineEvent[]): TimelineEvent | null => {
  const now = new Date();
  
  for (const event of events) {
    const eventDate = getEventDate(event);
    const endDate = event.endDate ? parseDate(event.endDate) : eventDate;
    
    if (now >= eventDate && now <= endDate) {
      return event;
    }
  }
  
  return null;
};

// Helper function to check if event is completed
export const isEventCompleted = (event: TimelineEvent): boolean => {
  const now = new Date();
  const endDate = event.endDate ? parseDate(event.endDate) : getEventDate(event);
  return now > endDate;
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "Aug 25",
    title: "Registration Opens",
    description: "Sign up begins for Hackfinity 1.0",
    icon: Calendar,
    color: "text-golden",
    bgColor: "bg-golden"
  },
  {
    date: "Sept 5",
    title: "Registration Closes",
    description: "Last day to register",
    icon: Calendar,
    color: "text-golden",
    bgColor: "bg-golden"
  },
  {
    date: "Sept 5-25",
    title: "Round 1: Evaluation & Online Presentation",
    description: "Idea submission, evaluation, and online presentation",
    icon: Users,
    color: "text-warm",
    bgColor: "bg-warm",
    startDate: "Sept 5",
    endDate: "Sept 25"
  },
  {
    date: "Sept 26",
    title: "Round 1 Results",
    description: "Final round qualifiers announced",
    icon: FileText,
    color: "text-cool",
    bgColor: "bg-cool"
  },
  {
    date: "Oct 6",
    title: "Round 2: On-Campus Hackathon",
    description: "24-hour hackathon at Ramco Institute of Technology",
    icon: Home,
    color: "text-golden",
    bgColor: "bg-golden"
  },
  {
    date: "Oct 7",
    title: "Round 2 Results & Winners",
    description: "Results and prize ceremony at Ramco Institute of Technology",
    icon: Trophy,
    color: "text-warm",
    bgColor: "bg-warm"
  }
];
