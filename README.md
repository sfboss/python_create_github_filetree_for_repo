# GitHub File Tree Explorer

A modern, beautifully styled React application that visualizes GitHub repository file structures with an interactive, theme-aware file explorer interface.

![GitHub File Tree Explorer](https://img.shields.io/badge/React-18+-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

## Features

### 🎯 Core Functionality
- **GitHub Repository URL Input** - Simply paste any GitHub repository URL
- **Interactive File Tree** - Expandable/collapsible folder navigation
- **Real-time Search** - Filter files and folders as you type
- **Repository Statistics** - View total file and folder counts

### 🎨 Themes & Styling
- **Multiple Themes** - GitHub Light, GitHub Dark, VS Code, and Dracula
- **Theme Persistence** - Your theme preference is saved locally
- **Smooth Transitions** - Polished animations and interactions
- **Responsive Design** - Works beautifully on all screen sizes

### ♿ Accessibility
- **Keyboard Navigation** - Full keyboard support with arrow keys and Enter
- **ARIA Labels** - Screen reader friendly
- **Focus Indicators** - Clear visual feedback
- **High Contrast Support** - Works with accessibility settings

### ⚡ Performance
- **GitHub REST API** - Fast and reliable data fetching
- **Efficient Rendering** - Optimized React components
- **Smart Caching** - Theme preferences saved locally

### 🔧 Developer Features
- **TypeScript** - Full type safety
- **Modern React** - Hooks and functional components
- **Vite** - Lightning-fast development and builds
- **File Type Icons** - Visual file type recognition

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sfboss/python_create_github_filetree_for_repo.git
cd python_create_github_filetree_for_repo
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up GitHub Personal Access Token:
   - For private repositories or to increase API rate limits
   - Create a `.env` file in the root directory:
   ```
   VITE_GITHUB_TOKEN=your_github_personal_access_token
   ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:3000`

### Demo Mode

To quickly test all features without making API calls, you can use the Demo component which displays mock data:

1. Edit `src/main.tsx` and change the import:
```typescript
import Demo from './Demo'  // Instead of App
```

2. Replace `<App />` with `<Demo />` in the render function

3. Start the dev server to see the file tree with sample data

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Enter a GitHub Repository URL**
   - Format: `https://github.com/owner/repo`
   - Example: `https://github.com/facebook/react`

2. **Click "Load Repository"**
   - The app will fetch and display the repository structure

3. **Explore the File Tree**
   - Click folders to expand/collapse
   - Use the search box to filter files
   - Navigate with keyboard (arrow keys, Enter)

4. **Customize Your Theme**
   - Use the theme selector in the header
   - Choose from GitHub, GitHub Dark, VS Code, or Dracula themes

## Supported Features

### Repository Support
- ✅ Public repositories (no authentication required)
- ✅ Private repositories (with GitHub Personal Access Token)
- ✅ Large repositories (handles pagination)
- ✅ Main and master branch support

### File Tree Features
- ✅ Hierarchical folder structure
- ✅ File type icons
- ✅ File size display
- ✅ Expandable/collapsible folders
- ✅ Real-time search filtering
- ✅ Keyboard navigation

### Themes
- ✅ GitHub (Light)
- ✅ GitHub Dark
- ✅ VS Code
- ✅ Dracula

## Project Structure

```
python_create_github_filetree_for_repo/
├── src/
│   ├── components/
│   │   ├── FileTreeExplorer.tsx  # Main tree explorer component
│   │   ├── TreeNode.tsx           # Individual tree node
│   │   └── ThemeSelector.tsx      # Theme switcher
│   ├── hooks/                     # Custom React hooks (future)
│   ├── styles/
│   │   └── App.css                # Main styles
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── utils/
│   │   ├── github.ts              # GitHub API integration
│   │   ├── icons.ts               # File icon mapping
│   │   └── themes.ts              # Theme definitions
│   ├── App.tsx                    # Main App component
│   └── main.tsx                   # Entry point
├── index.html                     # HTML template
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## Technologies Used

- **React 18+** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Octokit** - GitHub REST API client
- **Lucide React** - Icon library
- **CSS Variables** - Theming system

## API Rate Limits

GitHub API has rate limits:
- **Unauthenticated requests**: 60 requests per hour
- **Authenticated requests**: 5,000 requests per hour

To increase your rate limit, add a GitHub Personal Access Token to your `.env` file.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Acknowledgments

- GitHub REST API for repository data
- Lucide React for beautiful icons
- The React team for an amazing framework

## Future Enhancements

- [ ] Virtual scrolling for very large repositories
- [ ] Export tree as JSON/Markdown
- [ ] File preview on click
- [ ] Git status indicators
- [ ] Recently viewed repositories
- [ ] Bookmark favorite repositories
- [ ] Share tree view via URL
- [ ] Multi-select capability
- [ ] Drag-and-drop support

---

Made with ❤️ for the developer community
