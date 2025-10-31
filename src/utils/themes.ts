import { Theme } from '../types';

export const themes: Record<string, Theme> = {
  github: {
    name: 'GitHub',
    colors: {
      background: '#ffffff',
      text: '#24292f',
      hover: '#f6f8fa',
      border: '#d0d7de',
      primary: '#0969da',
      secondary: '#656d76',
    },
  },
  'github-dark': {
    name: 'GitHub Dark',
    colors: {
      background: '#0d1117',
      text: '#e6edf3',
      hover: '#161b22',
      border: '#30363d',
      primary: '#58a6ff',
      secondary: '#8b949e',
    },
  },
  vscode: {
    name: 'VS Code',
    colors: {
      background: '#1e1e1e',
      text: '#d4d4d4',
      hover: '#2a2d2e',
      border: '#3e3e42',
      primary: '#007acc',
      secondary: '#858585',
    },
  },
  dracula: {
    name: 'Dracula',
    colors: {
      background: '#282a36',
      text: '#f8f8f2',
      hover: '#44475a',
      border: '#6272a4',
      primary: '#bd93f9',
      secondary: '#6272a4',
    },
  },
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
};

export const getStoredTheme = (): string => {
  return localStorage.getItem('theme') || 'github-dark';
};

export const setStoredTheme = (themeName: string) => {
  localStorage.setItem('theme', themeName);
};
