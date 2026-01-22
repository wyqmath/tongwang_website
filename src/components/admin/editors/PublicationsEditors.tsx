"use client";

import { EditModal, type FieldConfig } from "../EditModal";
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
  onSave?: () => void;
  isNew?: boolean;
}) {
  const fields: FieldConfig[] = [
    {
      name: "authors",
      label: "Authors (HTML allowed: <u>, <sup>)",
      type: "textarea",
      required: true,
      placeholder: "e.g., <u>Wang T</u><sup>#*</sup>, Smith J<sup>#</sup>",
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

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      title={isNew ? "Add Publication" : "Edit Publication"}
      dataFile="publications.json"
      dataPath={isNew ? "publications" : `publications[id:${initialData?.id}]`}
      fields={fields}
      initialData={{
        ...initialData,
        isHighlighted: String(initialData?.isHighlighted ?? false),
      }}
      onSave={onSave}
      isArrayItem={true}
      isNew={isNew}
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
  onSave?: () => void;
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

  return (
    <EditModal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Legend"
      dataFile="publications.json"
      dataPath="legend"
      fields={fields}
      initialData={initialData}
      onSave={onSave}
    />
  );
}

