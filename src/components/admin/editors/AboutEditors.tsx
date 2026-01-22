"use client";

import React from 'react';
import { EditModal, FieldConfig } from '@/components/admin';
import { saveData } from '@/lib/admin-api';
import type { PersonalInfo, EducationItem, Award } from '@/types';

// Personal Info Editor
export function PersonalInfoEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: PersonalInfo;
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'position', label: 'Position', type: 'text', required: true },
    { name: 'affiliation', label: 'Affiliation', type: 'text', required: true },
    { name: 'location', label: 'Location', type: 'text', required: true },
    { name: 'avatar', label: 'Avatar URL', type: 'text', required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ dataType: 'about-pi', data: { personalInfo: data } });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Personal Info"
      description="Update PI's personal information"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

// Biography Editor
export function BiographyEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: string[];
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    { name: 'biography', label: 'Biography', type: 'array', rows: 10, required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({ dataType: 'about-pi', data: { biography: data.biography } });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Biography"
      description="Update PI's biography"
      fields={fields}
      initialData={{ biography: initialData }}
    />
  );
}

// Education Item Editor
export function EducationEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
  isNew = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: EducationItem;
  onSave: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    { name: 'degree', label: 'Degree', type: 'text', required: true },
    { name: 'field', label: 'Field', type: 'text', required: true },
    { name: 'institution', label: 'Institution', type: 'text', required: true },
    { name: 'year', label: 'Year', type: 'text', required: true },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({
      dataType: 'about-pi',
      data: { ...data, id: initialData.id },
      itemId: initialData.id,
      arrayField: 'education'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title={isNew ? "Add Education" : "Edit Education"}
      description="Update education information"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

// Award Item Editor
export function AwardEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
  isNew = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: Award;
  onSave: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    { name: 'title', label: 'Award Title', type: 'text', required: true },
    { name: 'year', label: 'Year', type: 'text', required: true },
    { name: 'organization', label: 'Organization', type: 'text' },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({
      dataType: 'about-pi',
      data: { ...data, id: initialData.id },
      itemId: initialData.id,
      arrayField: 'awards'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title={isNew ? "Add Award" : "Edit Award"}
      description="Update award information"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

