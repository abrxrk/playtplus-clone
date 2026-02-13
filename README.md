# PlaytPlus - Event Management App

A React Native mobile application built with Expo for organizing and discovering local gaming events, tournaments, and community gatherings.

## Project Structure

```
playtplus/
├── src/
│   ├── app/                          # Expo Router app directory
│   │   ├── (onboarding)/            # Onboarding flow
│   │   │   ├── welcome-1.tsx        # Welcome screen 1 - Features
│   │   │   ├── welcome-2.tsx        # Welcome screen 2 - Find Games
│   │   │   ├── welcome-3.tsx        # Welcome screen 3 - Share Journey
│   │   │   └── _layout.tsx          # Onboarding navigation
│   │   ├── (auth)/                  # Authentication flow
│   │   │   ├── login.tsx            # Login screen
│   │   │   ├── signup.tsx           # Sign up screen
│   │   │   └── _layout.tsx          # Auth navigation
│   │   ├── (tabs)/                  # Main app with bottom tabs
│   │   │   ├── index.tsx            # Home/Feed screen
│   │   │   ├── profile.tsx          # Profile screen
│   │   │   └── _layout.tsx          # Tabs navigation
│   │   ├── create-event.tsx         # Create event modal
│   │   ├── event-details.tsx        # Event details screen
│   │   └── _layout.tsx              # Root layout
│   ├── components/                  # Reusable components
│   │   ├── ui/                      # UI components
│   │   │   ├── Button.tsx           # Button component
│   │   │   ├── Input.tsx            # Input component
│   │   │   └── Card.tsx             # Card component
│   │   └── EventCard.tsx            # Event card component
│   ├── constants/                   # Design tokens and constants
│   │   ├── colors.ts                # Color palette
│   │   ├── typography.ts            # Typography scale
│   │   ├── spacing.ts               # Spacing scale
│   │   └── theme.ts                 # Theme configuration
│   └── hooks/                       # Custom React hooks
│       ├── use-color-scheme.ts      # Color scheme hook
│       ├── use-color-scheme.web.ts  # Web-specific color scheme
│       └── use-theme-color.ts       # Theme color hook
├── package.json
└── tsconfig.json
```

## Design System

### Colors
- **Primary**: `#01295F` (Dark Blue)
- **Accent**: `#4A90E2` (Light Blue)
- **Background**: `#FFFFFF` (White)
- **Text**: `#333333` (Dark Gray)

### Typography
- **Font Family**: SF Pro Text (iOS system font)
- **Sizes**: 12px - 32px
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Spacing
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

## Screens

### Onboarding Flow
1. **Welcome Screen 1** - Introduction with key features
2. **Welcome Screen 2** - Find games near you
3. **Welcome Screen 3** - Share your journey

### Authentication
- **Login** - Email/password login with social options
- **Sign Up** - Create new account

### Main App
- **Home/Feed** - Browse events and tournaments
- **Profile** - User profile with liked and created events
- **Create Event** - Create new events (modal)
- **Event Details** - View event information

## Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Styling**: StyleSheet (React Native)
- **Icons**: @expo/vector-icons

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Development Guidelines

### Component Structure
- All screens are in `src/app/` following Expo Router conventions
- Reusable components are in `src/components/`
- UI primitives are in `src/components/ui/`
- Design tokens are in `src/constants/`

### Naming Conventions
- **Files**: kebab-case for routes, PascalCase for components
- **Components**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE or PascalCase for objects

### Code Style
- Use TypeScript for type safety
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use design tokens from constants instead of hardcoded values

## Figma Design

The app design is based on Figma mockups with the following screens:
- Welcome Home screen (142:7)
- Welcome screen 2 (142:68)
- Welcome screen 3 (142:89)
- Events/Feed screen (1:2)
- Profile screen (2:2)
- Create Event screen (1:129)
- Event Details screen (2:105)

## Next Steps

1. Implement UI components with proper styling from Figma
2. Add navigation logic and state management
3. Integrate authentication (Firebase, Supabase, or custom backend)
4. Add form validation
5. Implement image upload functionality
6. Add API integration for events
7. Implement search and filtering
8. Add social features (likes, comments, sharing)
9. Implement push notifications
10. Add analytics and error tracking

## License

Private project - All rights reserved
