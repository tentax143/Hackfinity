# Overview

This is a modern hackathon landing page application built with React, Express, and PostgreSQL. The frontend features a cyberpunk-themed design with extensive animations using Framer Motion and particle effects via tsParticles. The application includes sections for hero content, about information, timeline, prizes, sponsors, and community features with a responsive design optimized for both desktop and mobile devices.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom cyberpunk color palette (cyber-blue, neon-purple, hot-pink, cyber-teal)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design system
- **Animations**: Framer Motion for page transitions, scroll-triggered animations, and interactive effects
- **Particle Effects**: tsParticles for dynamic background animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Typography**: Custom font stack with Orbitron and Exo 2 for futuristic appearance

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reloading
- **API Design**: RESTful API structure with /api prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with status code management
- **Logging**: Custom request/response logging with duration tracking

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Validation**: Drizzle-Zod integration for runtime type validation
- **Fallback Storage**: In-memory storage implementation for development/testing

## Development and Build Tools
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **TypeScript Configuration**: Strict mode enabled with path mapping for clean imports
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Code Quality**: ESLint and TypeScript compiler checks
- **Development Environment**: Replit-specific plugins and error overlay for enhanced development experience

## Component Architecture
- **Design System**: Modular UI components with consistent styling patterns
- **Animation Patterns**: Reusable animation variants for entrance effects, hover states, and scroll-triggered animations
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Custom Hooks**: Specialized hooks for countdown timers, animated counters, and mobile detection
- **Page Structure**: Single-page application with smooth scrolling navigation between sections

# External Dependencies

## Frontend Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for complex UI animations and transitions
- **react-particles & tsparticles-slim**: Particle system for background effects
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx & tailwind-merge**: Conditional CSS class management
- **date-fns**: Date manipulation and formatting utilities
- **wouter**: Lightweight routing solution

## Backend Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver optimized for serverless environments
- **drizzle-orm & drizzle-kit**: Type-safe ORM and schema management tools
- **express**: Web application framework for API endpoints
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Development Tools
- **vite & @vitejs/plugin-react**: Build tool and React plugin for fast development
- **typescript & tsx**: TypeScript runtime and development server
- **tailwindcss & postcss**: CSS framework and processing tools
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Database Services
- **Neon PostgreSQL**: Serverless PostgreSQL database hosting
- **Drizzle migrations**: Database schema versioning and deployment system