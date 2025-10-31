import React from 'react';
import { Palette } from 'lucide-react';
import { themes } from '../utils/themes';

interface ThemeSelectorProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="theme-selector">
      <Palette size={18} className="theme-icon" />
      <select
        value={currentTheme}
        onChange={(e) => onThemeChange(e.target.value)}
        className="theme-select"
        aria-label="Select theme"
      >
        {Object.entries(themes).map(([key, theme]) => (
          <option key={key} value={key}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;
