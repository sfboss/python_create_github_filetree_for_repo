# agents.md - File Tree Explorer Component

## Project Overview
Create a production-ready React-based file tree explorer component that visualizes GitHub repository structures with pixel-perfect design and comprehensive functionality. The component should support SFDX projects, output directories, and provide customizable themes with accessibility and performance optimization.

## Core Requirements

### Inputf
- **GitHub Repository URL Processing**
    - Accept full GitHub repository URLs (https://github.com/owner/repo)
    - Parse and validate repository owner and name
    - Support branch selection (main, master, or custom branches)
    - Handle monorepo paths and subdirectory specifications
    
- **GitHub API Integration**
    - Utilize GitHub REST API v3 and/or GraphQL API v4
    - Implement repository tree fetching via Git Trees API
    - Support pagination for large repositories
    - Handle rate limiting with exponential backoff
    - Cache API responses for performance optimization
    
- **Authentication & Security**
    - Support GitHub Personal Access Tokens (PAT)
    - Implement OAuth 2.0 flow for user authentication
    - Secure token storage (environment variables, secure cookies)
    - Handle both public repositories (no auth) and private repositories
    - Support GitHub Apps authentication for enterprise use

### Output
- **React Application Architecture**
    - Modern React 18+ with hooks and functional components
    - TypeScript for type safety and developer experience
    - Component-based architecture with clear separation of concerns
    - State management (Context API, Zustand, or Redux Toolkit)
    - Error boundaries for graceful error handling
    
- **Interactive File Tree Explorer**
    - Recursive tree rendering with virtualization for large trees
    - Expandable/collapsible folder navigation with smooth animations
    - Keyboard navigation support (arrow keys, enter, space)
    - Multi-select capability with Ctrl/Cmd + click
    - Drag-and-drop support (optional)
    - Search and filter functionality
    - Breadcrumb navigation
    - Right-click context menu options
    
- **Visual Design & Icons**
    - File type-specific icons (VS Code icon library or custom)
    - Folder icons with open/closed states
    - Git status indicators (modified, added, deleted, untracked)
    - Language-specific syntax highlighting preview
    - Size and modification date display
    - Loading skeletons and progress indicators
    
- **Customizable Themes**
    - Light and dark mode support
    - Pre-built themes (GitHub, VS Code, Material, Dracula)
    - Custom theme creation with CSS variables
    - Theme persistence in localStorage
    - Accessible color contrast ratios (WCAG AA/AAA)
    - Responsive font scaling
    
- **Performance Optimization**
    - Virtual scrolling for large file trees (react-window/react-virtualized)
    - Lazy loading of nested directories
    - Memoization of expensive computations
    - Code splitting and dynamic imports
    - Optimistic UI updates
    - Debounced search and filtering
    
- **Accessibility Features**
    - ARIA labels and roles
    - Screen reader support
    - Focus management and visible focus indicators
    - Semantic HTML structure
    - Keyboard shortcuts documentation
    - High contrast mode support
    
- **Additional Features**
    - Export tree structure as JSON, Markdown, or ASCII
    - Copy file paths to clipboard
    - Quick file preview modal
    - File statistics (total files, directories, sizes)
    - Recently viewed repositories
    - Bookmark favorite repositories
    - Share tree view via URL with state preservation
