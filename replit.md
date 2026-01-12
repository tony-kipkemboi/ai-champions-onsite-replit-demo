# Employee Feedback Form

## Overview

This is an internal employee feedback form application for "Guild" that allows employees to submit feedback to HR. The application features a simple form interface where users can provide their name, select their department, and submit feedback messages. Submitted feedback is stored in a CSV file on the server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful API with JSON request/response
- **Data Storage**: CSV file-based storage (feedback.csv)
- **Validation**: Zod schemas shared between client and server

### Project Structure
```
├── client/           # React frontend application
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Page components
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage abstraction
├── shared/           # Shared code between client/server
│   └── schema.ts     # Zod validation schemas
└── migrations/       # Database migrations (Drizzle)
```

### Build System
- Development: Vite dev server with HMR, Express backend via tsx
- Production: Vite builds static assets, esbuild bundles server code
- Output: `dist/public` for static files, `dist/index.cjs` for server

### Design System
- Material Design-inspired with professional restraint
- Single-column centered form layout (max-width 640px)
- Consistent spacing using Tailwind units of 4, 6, and 8
- Light/dark mode support via CSS variables

## External Dependencies

### Database
- **Drizzle ORM**: Configured for PostgreSQL but not actively used
- **Current Storage**: CSV file (feedback.csv) for feedback submissions
- **Note**: PostgreSQL connection expected via DATABASE_URL environment variable

### UI Libraries
- **Radix UI**: Accessible component primitives (dialogs, selects, tooltips, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **Vaul**: Drawer component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation (shared between client/server)
- **@hookform/resolvers**: Zod resolver for React Hook Form

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **TypeScript**: Type checking across the codebase
- **Tailwind CSS**: Utility-first CSS framework