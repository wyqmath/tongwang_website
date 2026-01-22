"use client";

import React from 'react';
import { EditModal, FieldConfig } from '@/components/admin';
import { saveData, generateId } from '@/lib/admin-api';
import type { NewsArticle } from "@/types";

// News Article Editor
export function NewsArticleEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
  isNew = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData?: NewsArticle;
  onSave: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    {
      name: "date",
      label: "Date",
      type: "text",
      required: true,
      placeholder: "e.g., January 15, 2025",
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "textarea",
      required: true,
      rows: 5,
    },
    {
      name: "category",
      label: "Category",
      type: "select",
      required: true,
      options: [
        { value: "lab-news", label: "Lab News" },
        { value: "publication", label: "Publication" },
        { value: "award", label: "Award" },
        { value: "conference", label: "Conference" },
      ],
    },
    {
      name: "images",
      label: "Images (one URL per line)",
      type: "array",
      placeholder: "/images/news/example.jpg",
      rows: 3,
    },
  ];

  // Default data for new articles
  const defaultData: Record<string, unknown> = {
    id: generateId(),
    date: '',
    title: '',
    content: '',
    category: 'lab-news',
    images: [],
  };

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({
      dataType: 'news',
      data: { ...data, id: initialData?.id || defaultData.id },
      itemId: isNew ? undefined : initialData?.id,
      arrayField: 'articles'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title={isNew ? "Add News Article" : "Edit News Article"}
      description={isNew ? "Add a new news article" : "Edit this news article"}
      fields={fields}
      initialData={(initialData || defaultData) as Record<string, unknown>}
    />
  );
}

