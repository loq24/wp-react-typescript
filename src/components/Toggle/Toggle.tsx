import React, { useState, useLayoutEffect } from 'react';
import './Toggle.css';

const themeTokenName = '_wp_react_ts_theme';

const addBodyClass = (className: string) =>
  document.body.classList.add(className);
const removeBodyClass = (className: string) =>
  document.body.classList.remove(className);

/**
 * Forked from https://codepen.io/AllThingsSmitty/pen/MmxxOz/
 */
const Toggle: React.FC = () => {
  const currentTheme = localStorage.getItem(themeTokenName);
  const [theme, setTheme] = useState(currentTheme);

  const updateThemeLocalStorage = (themeName: string) => {
    setTheme(themeName);
    localStorage.setItem(themeTokenName, themeName);
  };

  const toggleTheme = () => {
    if (!theme) {
      updateThemeLocalStorage('dark');
    } else {
      updateThemeLocalStorage('');
      removeBodyClass('dark');
    }
  };

  useLayoutEffect(() => {
    if (theme === 'dark') {
      addBodyClass('dark');
    }
  }, [theme]);

  return (
    <div className="toggle-theme">
      <label className="switch">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          checked={theme === 'dark'}
        />
        <div className={`slider ${theme} round`} />
      </label>
    </div>
  );
};

export default Toggle;
