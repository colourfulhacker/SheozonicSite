# Sheozonic Logistics Aggregator Platform

## Overview

Sheozonic is a next-generation logistics aggregator platform that unifies B2B and B2C shipping needs under one intelligent ecosystem. The platform serves as a universal logistics layer for e-commerce sellers, enterprises, and API partners, offering AI-powered courier selection, instant quotations, and comprehensive logistics management. Built as a modern web application with React frontend and Express backend, the system leverages PostgreSQL for data persistence and integrates advanced UI components for an exceptional user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using React with TypeScript, implementing a component-based architecture with the following key decisions:

- **UI Framework**: Utilizes shadcn/ui components built on top of Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe forms
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The server-side application follows a modern Node.js architecture:

- **Runtime**: Node.js with TypeScript and ESM modules
- **Framework**: Express.js for HTTP server functionality
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Development**: Hot reloading with Vite integration for full-stack development

### Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **Database Provider**: Neon Database for serverless PostgreSQL hosting
- **Schema Management**: Drizzle Kit for migrations and schema management
- **In-Memory Storage**: Fallback MemStorage implementation for development/testing

### Authentication and Authorization
The application includes basic user management infrastructure with:
- User schema with username/password authentication
- Session-based authentication placeholder
- Cookie-based session storage using connect-pg-simple

### Development and Build Pipeline
- **Package Management**: npm with lockfile for dependency consistency
- **TypeScript**: Full TypeScript support across frontend, backend, and shared code
- **Build Process**: Separate build commands for client (Vite) and server (esbuild)
- **Development Server**: Integrated development environment with hot reloading

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe ORM for PostgreSQL with migration support

### UI and Component Libraries
- **Radix UI**: Comprehensive primitive components for accessibility
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the entire application
- **React Query**: Server state management and data fetching
- **Replit Integration**: Development environment plugins for Replit platform

### Potential Third-Party Integrations
Based on the business requirements, the platform will likely integrate with:
- Courier service APIs (BlueDart, DTDC, etc.)
- Payment processing services
- SMS/Email notification services
- Geographic and pincode lookup services
- Fraud detection and risk management services