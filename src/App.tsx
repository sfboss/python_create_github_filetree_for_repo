import React, { useState, useEffect } from 'react';
import FileTreeExplorer from './components/FileTreeExplorer';
import ThemeSelector from './components/ThemeSelector';
import { TreeNode } from './types';
import { parseGitHubUrl, fetchRepoTree } from './utils/github';
import { themes, applyTheme, getStoredTheme, setStoredTheme } from './utils/themes';
import { Github, Loader } from 'lucide-react';
import './styles/App.css';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [tree, setTree] = useState<TreeNode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [repoInfo, setRepoInfo] = useState<{ owner: string; repo: string } | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setTree([]);
    setRepoInfo(null);

    const parsed = parseGitHubUrl(repoUrl);
    if (!parsed) {
      setError('Invalid GitHub URL. Please use format: https://github.com/owner/repo');
      return;
    }

    setLoading(true);
    try {
      const treeData = await fetchRepoTree(parsed.owner, parsed.repo, parsed.branch);
      setTree(treeData);
      setRepoInfo({ owner: parsed.owner, repo: parsed.repo });
    } catch (err) {
      setError('Failed to fetch repository. Please check the URL and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <Github size={32} />
            <h1>GitHub File Tree Explorer</h1>
          </div>
          <ThemeSelector currentTheme={currentTheme} onThemeChange={handleThemeChange} />
        </div>
      </header>

      <main className="app-main">
        <div className="input-container">
          <form onSubmit={handleSubmit} className="url-form">
            <input
              type="text"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="Enter GitHub repository URL (e.g., https://github.com/facebook/react)"
              className="url-input"
              aria-label="GitHub repository URL"
            />
            <button
              type="submit"
              className="submit-button"
              disabled={loading}
              aria-label="Load repository"
            >
              {loading ? <Loader size={20} className="spinner" /> : 'Load Repository'}
            </button>
          </form>
          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}
        </div>

        {loading && (
          <div className="loading-state">
            <Loader size={40} className="spinner" />
            <p>Loading repository structure...</p>
          </div>
        )}

        {!loading && tree.length > 0 && repoInfo && (
          <FileTreeExplorer
            tree={tree}
            repoName={`${repoInfo.owner}/${repoInfo.repo}`}
          />
        )}

        {!loading && tree.length === 0 && !error && (
          <div className="welcome-state">
            <Github size={64} />
            <h2>Welcome to GitHub File Tree Explorer</h2>
            <p>Enter a GitHub repository URL above to explore its file structure</p>
            <div className="example-urls">
              <p>Try these examples:</p>
              <ul>
                <li>https://github.com/facebook/react</li>
                <li>https://github.com/microsoft/vscode</li>
                <li>https://github.com/nodejs/node</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
