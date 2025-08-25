# Timeline Setup Guide

## Overview
The timeline component is now fully dynamic and can be easily updated by modifying the configuration file.

## File Location
- **Configuration**: `client/src/config/timeline.ts`
- **Component**: `client/src/components/Timeline.tsx`

## How to Update Timeline

### 1. Edit the Configuration File
Open `client/src/config/timeline.ts` and modify the `timelineEvents` array:

```typescript
export const timelineEvents: TimelineEvent[] = [
  {
    date: "Aug 25",
    title: "Registration Opens",
    description: "Sign up begins for Hackfinity 1.0",
    icon: Calendar,
    color: "text-golden",
    bgColor: "bg-golden"
  },
  // Add more events here...
];
```

### 2. Available Icons
Import icons from `lucide-react`:
- `Calendar` - For registration events
- `Users` - For team/people events
- `FileText` - For results/announcements
- `Presentation` - For presentations
- `Home` - For on-campus events
- `Trophy` - For final results/winners
- `Code` - For coding/hackathon events
- `Award` - For ceremonies

### 3. Available Colors
- `text-golden` / `bg-golden` - Golden theme
- `text-warm` / `bg-warm` - Warm theme
- `text-cool` / `bg-cool` - Cool theme

### 4. Responsive Design
The timeline automatically adapts to different screen sizes:
- **Desktop (lg+)**: 8-column grid
- **Tablet (md-lg)**: 4-column grid
- **Mobile (<md)**: Vertical list

## Current Timeline (Hackfinity 1.0)

1. **Aug 25** - Registration Opens
2. **Sept 5** - Registration Closes
3. **Sept 5-15** - Evaluation & Shortlisting
4. **Sept 15** - Round 1 Results
5. **Sept 20-25** - Round 2: Online Presentation
6. **Sept 26** - Round 2 Results
7. **Oct 6** - Final Round: On-Campus (24hr hackathon)
8. **Oct 7** - Hackathon Ends & Winners

## Benefits of Dynamic Timeline

✅ **Easy Updates**: Change dates without touching component code
✅ **Type Safety**: TypeScript interface ensures data consistency
✅ **Responsive**: Automatically adapts to all screen sizes
✅ **Maintainable**: Centralized configuration
✅ **Reusable**: Can be used for future events

## Example: Adding a New Event

```typescript
{
  date: "Sept 30",
  title: "Workshop Day",
  description: "Technical workshops for participants",
  icon: Code,
  color: "text-cool",
  bgColor: "bg-cool"
}
```

The timeline will automatically update and maintain proper spacing and animations.
