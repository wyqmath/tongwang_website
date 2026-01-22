"use client";

import React from 'react';
import { Settings, X } from 'lucide-react';
import { useAdmin, useDevModeShortcut } from './AdminProvider';

export function DevModeToggle() {
  const { isDevMode, toggleDevMode } = useAdmin();
  
  // Enable keyboard shortcut
  useDevModeShortcut();

  if (!isDevMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-lg px-4 py-2 shadow-lg">
      <Settings className="h-4 w-4 text-amber-700 animate-spin-slow" />
      <span className="text-sm font-medium text-amber-800">Dev Mode</span>
      <button
        onClick={toggleDevMode}
        className="ml-2 p-1 rounded-full hover:bg-amber-200 text-amber-700"
        title="Exit Dev Mode (Ctrl+Shift+D)"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

// Hidden trigger to enable dev mode (triple-click on a secret element)
export function DevModeTrigger() {
  const { isDevMode, toggleDevMode } = useAdmin();
  const [clickCount, setClickCount] = React.useState(0);
  const clickTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
    }
    
    clickTimeout.current = setTimeout(() => {
      setClickCount(0);
    }, 500);

    if (clickCount >= 2) {
      toggleDevMode();
      setClickCount(0);
    }
  };

  if (isDevMode) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 w-4 h-4 opacity-0 hover:opacity-10 cursor-default"
      title=""
      aria-hidden="true"
    />
  );
}

