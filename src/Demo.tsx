import { useState, useEffect } from 'react';
import FileTreeExplorer from './components/FileTreeExplorer';
import ThemeSelector from './components/ThemeSelector';
import { themes, applyTheme, getStoredTheme, setStoredTheme } from './utils/themes';
import { mockRepoTree } from './utils/mockData';
import { Github } from 'lucide-react';
import './styles/App.css';

function Demo() {
  const [currentTheme, setCurrentTheme] = useState(getStoredTheme());

  useEffect(() => {
    const theme = themes[currentTheme];
    if (theme) {
      applyTheme(theme);
    }
  }, [currentTheme]);

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    setStoredTheme(themeName);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <Github size={32} />
            <h1>GitHub File Tree Explorer - Demo</h1>
          </div>
          <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
        </div>
      </header>

      <main className="app-main">
        <div className="demo-note" style={{
          padding: '16px',
          marginBottom: '24px',
          backgroundColor: 'var(--color-hover)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          color: 'var(--color-text)'
        }}>
          <p><strong>Demo Mode:</strong> This page shows the file tree explorer with sample data to demonstrate all features including expandable folders, file icons, search, and theming.</p>
        </div>

        <FileTreeExplorer
          tree={mockRepoTree}
          repoName="example/demo-repository"
        />
      </main>
    </div>
  );
}

export default Demo;
