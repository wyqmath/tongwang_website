"use client";

import React from 'react';
import { EditModal, FieldConfig } from '@/components/admin';
import { saveData } from '@/lib/admin-api';
import type { TeamMember } from '@/types';

// Team Member Editor
export function TeamMemberEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
  isNew = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: TeamMember;
  onSave: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'degree', label: 'Degree', type: 'text' },
    { 
      name: 'category', 
      label: 'Category', 
      type: 'select', 
      required: true,
      options: [
        { value: 'admin', label: 'Lab Administrator' },
        { value: 'postdoc', label: 'Postdoctoral Researcher' },
        { value: 'phd', label: 'Ph.D. Student' },
        { value: 'master', label: 'Master Student' },
        { value: 'undergraduate', label: 'Undergraduate Student' },
        { value: 'alumni', label: 'Alumni' },
      ]
    },
    { name: 'photo', label: 'Photo URL', type: 'text', required: true },
    { name: 'intro', label: 'Introduction', type: 'textarea', rows: 5, required: true },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'joinYear', label: 'Join Year', type: 'number' },
    { name: 'graduationYear', label: 'Graduation Year', type: 'number' },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ 
      dataType: 'people', 
      data: { ...data, id: initialData.id }, 
      itemId: initialData.id,
      arrayField: 'members'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title={isNew ? "Add Team Member" : "Edit Team Member"}
      description="Update team member information"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

// Join Team Section Editor
export function JoinTeamEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: { title: string; description: string; buttonText: string; buttonLink: string };
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'description', label: 'Description', type: 'textarea', rows: 3, required: true },
    { name: 'buttonText', label: 'Button Text', type: 'text', required: true },
    { name: 'buttonLink', label: 'Button Link', type: 'text', required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ 
      dataType: 'people', 
      data: { joinTeam: data }
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Join Team Section"
      description="Update the join team section"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

