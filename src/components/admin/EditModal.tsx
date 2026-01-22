"use client";

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Save, X } from 'lucide-react';

export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'url' | 'email' | 'select' | 'array';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // For select type
  rows?: number; // For textarea
}

interface EditModalProps<T extends Record<string, unknown>> {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: T) => Promise<void>;
  title: string;
  description?: string;
  fields: FieldConfig[];
  initialData: T;
  className?: string;
}

export function EditModal<T extends Record<string, unknown>>({
  isOpen,
  onClose,
  onSave,
  title,
  description,
  fields,
  initialData,
  className = '',
}: EditModalProps<T>) {
  const [formData, setFormData] = useState<T>(initialData);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (name: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    
    try {
      await onSave(formData);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save');
    } finally {
      setIsSaving(false);
    }
  };

  const renderField = (field: FieldConfig) => {
    const value = formData[field.name as keyof T];

    switch (field.type) {
      case 'textarea':
        return (
          <Textarea
            id={field.name}
            value={String(value ?? '')}
            onChange={(e) => handleChange(field.name, e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            rows={field.rows || 3}
            className="resize-y"
          />
        );
      case 'select':
        return (
          <select
            id={field.name}
            value={String(value ?? '')}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case 'array':
        return (
          <Textarea
            id={field.name}
            value={Array.isArray(value) ? value.join('\n') : String(value ?? '')}
            onChange={(e) => handleChange(field.name, e.target.value.split('\n').filter(Boolean))}
            placeholder={field.placeholder || 'Each item on a new line'}
            required={field.required}
            rows={field.rows || 4}
            className="resize-y font-mono text-sm"
          />
        );
      default:
        return (
          <Input
            id={field.name}
            type={field.type}
            value={String(value ?? '')}
            onChange={(e) => handleChange(field.name, field.type === 'number' ? Number(e.target.value) : e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className={`max-w-2xl max-h-[90vh] overflow-y-auto ${className}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              <Label htmlFor={field.name}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {renderField(field)}
            </div>
          ))}

          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}

          <DialogFooter className="gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} disabled={isSaving}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

