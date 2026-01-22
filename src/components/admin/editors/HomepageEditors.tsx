"use client";

import React from 'react';
import { EditModal, FieldConfig } from '@/components/admin';
import { saveData } from '@/lib/admin-api';
import type { ResearchInterest, RecentPublication, LabNewsItem } from '@/types';

// Hero Section Editor
export function HeroEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: { heroTitle: string; backgroundImage: string };
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'heroTitle', label: 'Hero Title (支持换行)', type: 'textarea', rows: 3, required: true },
    { name: 'backgroundImage', label: 'Background Image URL', type: 'text', required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ dataType: 'homepage', data });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Hero Section"
      description="Edit the hero banner title and background image"
      fields={fields}
      initialData={initialData}
    />
  );
}

// Welcome Section Editor
export function WelcomeEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: { welcomeTitle: string; welcomePoints: string[] };
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'welcomeTitle', label: 'Welcome Title', type: 'text', required: true },
    { name: 'welcomePoints', label: 'Welcome Points (每行一条)', type: 'array', rows: 5, required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ dataType: 'homepage', data });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Welcome Section"
      description="Edit the welcome section title and points"
      fields={fields}
      initialData={initialData}
    />
  );
}

// Research Interest Item Editor
export function ResearchInterestEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: ResearchInterest;
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', rows: 3, required: true },
    { name: 'image', label: 'Image URL', type: 'text', required: true },
    { 
      name: 'color', 
      label: 'Color Theme', 
      type: 'select', 
      options: [
        { value: 'blue', label: 'Blue' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
      ],
      required: true 
    },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ 
      dataType: 'homepage', 
      data, 
      itemId: initialData.id,
      arrayField: 'researchInterests'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Research Interest"
      description="Edit this research interest item"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

// Publication Item Editor
export function PublicationItemEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: RecentPublication;
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'title', label: 'Title', type: 'textarea', rows: 2, required: true },
    { name: 'authors', label: 'Authors', type: 'text', required: true },
    { name: 'year', label: 'Year', type: 'text', required: true },
    { name: 'journal', label: 'Journal', type: 'text', required: true },
    { name: 'volume', label: 'Volume', type: 'text' },
    { name: 'pages', label: 'Pages', type: 'text' },
    { name: 'image', label: 'Image URL', type: 'text', required: true },
    { name: 'link', label: 'Paper Link', type: 'url', required: true },
    { name: 'note', label: 'Note (e.g., ESI highly cited)', type: 'text' },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ 
      dataType: 'homepage', 
      data, 
      itemId: initialData.id,
      arrayField: 'recentPublications'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Publication"
      description="Edit this publication item"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

// Lab News Item Editor
export function LabNewsEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: LabNewsItem;
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'date', label: 'Date', type: 'text', required: true },
    { name: 'image', label: 'Image URL', type: 'text', required: true },
    { name: 'link', label: 'Link URL', type: 'text', required: true },
    { name: 'isRecruiting', label: 'Is Recruiting', type: 'select', options: [{ value: 'true', label: 'Yes' }, { value: 'false', label: 'No' }] },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({
      dataType: 'homepage',
      data,
      itemId: initialData.id,
      arrayField: 'labNews'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Lab News"
      description="Edit this lab news item"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

