"use client";

import React from 'react';
import { EditModal, FieldConfig } from '@/components/admin';
import { saveData, generateId } from '@/lib/admin-api';
import type { Publication, PublicationsLegend } from "@/types";

// Publication Editor
export function PublicationEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
  isNew = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Publication;
  onSave: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    {
      name: "authors",
      label: "Authors (HTML allowed: <u>, <sup>)",
      type: "textarea",
      required: true,
      placeholder: "e.g., <u>Wang T</u><sup>#*</sup>, Smith J<sup>#</sup>",
      rows: 2,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "journal",
      label: "Journal",
      type: "text",
      required: true,
    },
    {
      name: "year",
      label: "Year",
      type: "number",
      required: true,
    },
    {
      name: "volume",
      label: "Volume",
      type: "text",
    },
    {
      name: "pages",
      label: "Pages",
      type: "text",
      placeholder: "e.g., 123-456",
    },
    {
      name: "link",
      label: "DOI/Link",
      type: "url",
    },
    {
      name: "note",
      label: "Note (e.g., ESI highly cited)",
      type: "text",
    },
    {
      name: "isHighlighted",
      label: "Highlighted",
      type: "select",
      options: [
        { value: "false", label: "No" },
        { value: "true", label: "Yes" },
      ],
    },
  ];

  // Default data for new publications
  const defaultData: Record<string, unknown> = {
    id: generateId(),
    authors: '',
    title: '',
    journal: '',
    year: new Date().getFullYear(),
    volume: '',
    pages: '',
    link: '',
    note: '',
    isHighlighted: 'false',
  };

  const handleSave = async (data: Record<string, unknown>) => {
    // Convert isHighlighted back to boolean
    const processedData = {
      ...data,
      id: initialData?.id || defaultData.id,
      isHighlighted: data.isHighlighted === 'true',
    };
    const result = await saveData({
      dataType: 'publications',
      data: processedData,
      itemId: isNew ? undefined : initialData?.id,
      arrayField: 'publications'
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  const formattedData = initialData ? {
    ...initialData,
    isHighlighted: String(initialData.isHighlighted ?? false),
  } : defaultData;

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title={isNew ? "Add Publication" : "Edit Publication"}
      description={isNew ? "Add a new publication" : "Edit this publication"}
      fields={fields}
      initialData={formattedData as Record<string, unknown>}
    />
  );
}

// Legend Editor
export function PublicationsLegendEditor({
  isOpen,
  onClose,
  initialData,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialData: PublicationsLegend;
  onSave: () => void;
}) {
  const fields: FieldConfig[] = [
    {
      name: "coFirst",
      label: "Co-first Author Symbol",
      type: "text",
      required: true,
      placeholder: "# co-first author",
    },
    {
      name: "corresponding",
      label: "Corresponding Author Symbol",
      type: "text",
      required: true,
      placeholder: "* corresponding author",
    },
  ];

  const handleSave = async (data: Record<string, unknown>) => {
    const result = await saveData({
      dataType: 'publications',
      data: { legend: data }
    });
    if (!result.success) throw new Error(result.error);
    onSave();
  };

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      onSave={handleSave}
      title="Edit Legend"
      description="Edit the publication legend symbols"
      fields={fields}
      initialData={initialData as unknown as Record<string, unknown>}
    />
  );
}

