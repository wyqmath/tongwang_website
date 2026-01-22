"use client";

import React from 'react';
import { Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAdmin } from './AdminProvider';

interface EditButtonProps {
  onClick: () => void;
  className?: string;
  size?: 'sm' | 'default' | 'lg' | 'icon';
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  label?: string;
}

export function EditButton({
  onClick,
  className = '',
  size = 'icon',
  variant = 'outline',
  label,
}: EditButtonProps) {
  const { isDevMode } = useAdmin();

  if (!isDevMode) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      size={size}
      variant={variant}
      className={`bg-amber-100 hover:bg-amber-200 border-amber-300 text-amber-700 ${className}`}
      title="Edit (Dev Mode)"
    >
      <Pencil className="h-4 w-4" />
      {label && <span className="ml-2">{label}</span>}
    </Button>
  );
}

// Floating edit button for sections
export function FloatingEditButton({
  onClick,
  position = 'top-right',
}: {
  onClick: () => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}) {
  const { isDevMode } = useAdmin();

  if (!isDevMode) {
    return null;
  }

  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
  };

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClasses[position]} p-2 rounded-full bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-700 shadow-md transition-all hover:scale-110 z-50`}
      title="Edit (Dev Mode)"
    >
      <Pencil className="h-4 w-4" />
    </button>
  );
}

