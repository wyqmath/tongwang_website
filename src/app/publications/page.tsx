"use client";

import { useState, useCallback } from "react";
import { getPublicationsData } from "@/lib/data";
import { useAdmin, FloatingEditButton } from "@/components/admin";
import { PublicationEditor, PublicationsLegendEditor } from "@/components/admin/editors/PublicationsEditors";
import type { Publication, PublicationsData } from "@/types";

// 渲染作者文本（包含 HTML 标记如 <u>, <sup>）
function AuthorText({ authors }: { authors: string }) {
  return <span dangerouslySetInnerHTML={{ __html: authors }} className="font-medium" />;
}

// 渲染单篇论文
function PublicationItem({
  pub,
  onEdit
}: {
  pub: Publication;
  onEdit?: () => void;
}) {
  const volume = pub.volume ? pub.volume : '';
  const pages = pub.pages ? `: ${pub.pages}` : '';

  return (
    <div className="relative flex gap-4">
      {onEdit && (
        <FloatingEditButton
          label="Edit"
          onClick={onEdit}
          position="top-right"
        />
      )}
      <div className="flex-1">
        <p className="text-lg leading-relaxed">
          <AuthorText authors={pub.authors} /> ({pub.year}).{' '}
          <a
            href={pub.link}
            className="hover:underline"
            style={{ color: 'rgb(147, 51, 234)' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {pub.title}
          </a>
          .{' '}
          <i><b>{pub.journal}</b></i>
          {volume && `, ${volume}${pages}`}.
          {pub.note && (
            <>
              {' '}
              {pub.noteLinks && pub.noteLinks.length > 0 ? (
                <span className="font-bold text-purple-600">
                  (<a
                    href={pub.noteLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {pub.note}
                  </a>)
                </span>
              ) : (
                <span className="font-bold text-purple-600">({pub.note})</span>
              )}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function PublicationsPage() {
  const { isDevMode } = useAdmin();
  const [data, setData] = useState<PublicationsData>(getPublicationsData());
  const { legend, publications } = data;

  // Editing states
  const [editingPublication, setEditingPublication] = useState<Publication | null>(null);
  const [editingLegend, setEditingLegend] = useState(false);

  // Refresh data callback
  const refreshData = useCallback(() => {
    setData(getPublicationsData());
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Header */}
      <div className="relative mb-12">
        {isDevMode && (
          <FloatingEditButton
            label="Edit Legend"
            onClick={() => setEditingLegend(true)}
            position="top-right"
          />
        )}
        <h1 className="text-5xl font-bold mb-4" style={{ color: 'rgb(102, 8, 116)' }}>Publications</h1>
        <p className="text-lg text-gray-600 mt-2">
          <sup>#</sup> {legend.coFirst.replace('# ', '')}, <sup>*</sup> {legend.corresponding.replace('* ', '')}
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        <div className="mb-8">
          <div className="space-y-4">
            {publications.map((pub) => (
              <PublicationItem
                key={pub.id}
                pub={pub}
                onEdit={isDevMode ? () => setEditingPublication(pub) : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Edit Modals */}
      {isDevMode && (
        <>
          {editingPublication && (
            <PublicationEditor
              isOpen={!!editingPublication}
              onClose={() => setEditingPublication(null)}
              initialData={editingPublication}
              onSave={refreshData}
            />
          )}
          <PublicationsLegendEditor
            isOpen={editingLegend}
            onClose={() => setEditingLegend(false)}
            initialData={legend}
            onSave={refreshData}
          />
        </>
      )}
    </div>
  );
}
