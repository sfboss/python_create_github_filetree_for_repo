# Changelog

All notable changes to the GitHub File Tree Explorer project will be documented in this file.

## [1.0.0] - 2025-10-31

### Added - Initial Release

#### Core Features
- GitHub repository URL input with parsing and validation
- GitHub REST API integration using Octokit
- Interactive file tree with expandable/collapsible folders
- Real-time search and filtering functionality
- File and folder statistics display
- Support for both `main` and `master` branch defaults

#### User Interface
- Four beautiful pre-built themes:
  - GitHub (Light)
  - GitHub Dark
  - VS Code Dark
  - Dracula
- Theme selector in header
- Theme persistence using localStorage
- Responsive design for all screen sizes
- File type-specific icons (Lucide React)
- Folder open/closed state icons
- File size display with formatted units
- Smooth animations and transitions

#### Accessibility
- Full keyboard navigation support (Arrow keys, Enter, Space)
- ARIA labels and roles for screen readers
- Semantic HTML structure
- Focus indicators with visible outlines
- High contrast mode support
- Reduced motion support for accessibility preferences

#### Developer Experience
- TypeScript for complete type safety
- Modern React 18+ with hooks and functional components
- Vite for fast development and optimized builds
- Component-based architecture
- CSS variables for theming system
- Comprehensive README documentation
- Example .env file for configuration
- Mock data utilities for testing
- Demo component for offline testing

#### Performance Optimizations
- Memoized search results using React.useMemo
- Efficient tree rendering without virtualization
- Optimized CSS with hardware acceleration
- Minimal re-renders with React best practices

#### Security
- CodeQL security analysis passed (0 vulnerabilities)
- npm audit passed (0 vulnerabilities)
- Security warning for client-side GitHub token usage
- Proper error handling for API failures

### Technical Details

#### Technologies Used
- React 19.2.0
- TypeScript 5.9.3
- Vite 7.1.12
- Octokit REST 22.0.0
- Lucide React 0.548.0

#### Project Structure
```
src/
├── components/
│   ├── FileTreeExplorer.tsx  - Main tree explorer component
│   ├── TreeNode.tsx           - Individual tree node with recursion
│   └── ThemeSelector.tsx      - Theme switcher dropdown
├── utils/
│   ├── github.ts              - GitHub API client and utilities
│   ├── themes.ts              - Theme definitions and management
│   ├── icons.ts               - File type icon mapping
│   └── mockData.ts            - Sample tree data for testing
├── types/
│   └── index.ts               - TypeScript type definitions
├── styles/
│   └── App.css                - Main styles with CSS variables
├── App.tsx                    - Main application component
├── Demo.tsx                   - Demo component with mock data
└── main.tsx                   - Entry point
```

#### Build Output
- Optimized production build
- CSS bundle: ~7.6 KB (1.9 KB gzipped)
- JavaScript bundle: ~308 KB (85 KB gzipped)
- Total build time: ~2-3 seconds

### Notes
- GitHub API rate limits: 60/hour unauthenticated, 5000/hour with token
- Supports public repositories without authentication
- Private repositories require GitHub Personal Access Token
- Client-side GitHub token is exposed in bundle (use server-side for production)

---

[1.0.0]: https://github.com/sfboss/python_create_github_filetree_for_repo/releases/tag/v1.0.0
