"use client";

import { EditModal, type FieldConfig } from "../EditModal";
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
  onSave?: () => void;
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
    },
  ];

  // Convert images array to string for editing
  const formattedData = initialData ? {
    ...initialData,
    images: Array.isArray(initialData.images) ? initialData.images.join('\n') : '',
  } : undefined;

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      title={isNew ? "Add News Article" : "Edit News Article"}
      dataFile="news.json"
      dataPath={isNew ? "articles" : `articles[id:${initialData?.id}]`}
      fields={fields}
      initialData={formattedData}
      onSave={onSave}
      isArrayItem={true}
      isNew={isNew}
    />
  );
}

