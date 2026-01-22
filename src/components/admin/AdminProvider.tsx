"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AdminContextType {
  isDevMode: boolean;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  toggleDevMode: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isDevMode, setIsDevMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Check environment variable
    const devMode = process.env.NEXT_PUBLIC_DEV_MODE === 'true';
    setIsDevMode(devMode);
    
    // Also check localStorage for persistent dev mode toggle
    const storedDevMode = localStorage.getItem('devMode');
    if (storedDevMode !== null) {
      setIsDevMode(storedDevMode === 'true');
    }
  }, []);

  const toggleDevMode = () => {
    const newValue = !isDevMode;
    setIsDevMode(newValue);
    localStorage.setItem('devMode', String(newValue));
    if (!newValue) {
      setIsEditing(false);
    }
  };

  return (
    <AdminContext.Provider value={{ isDevMode, isEditing, setIsEditing, toggleDevMode }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

// Keyboard shortcut hook for toggling dev mode (Ctrl+Shift+D)
export function useDevModeShortcut() {
  const { toggleDevMode } = useAdmin();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        toggleDevMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleDevMode]);
}

