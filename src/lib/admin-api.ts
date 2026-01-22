// Admin API utilities for client-side data operations

export type DataType = 
  | 'homepage'
  | 'about-pi'
  | 'people'
  | 'publications'
  | 'news'
  | 'openings'
  | 'software'
  | 'contact';

interface SaveDataOptions {
  dataType: DataType;
  data: Record<string, unknown>;
  itemId?: string;  // For updating specific item
  arrayField?: string;  // Which array field to update
}

interface DeleteDataOptions {
  dataType: DataType;
  itemId: string;
  arrayField: string;
}

export async function saveData(options: SaveDataOptions): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    const response = await fetch('/api/admin/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { success: false, error: result.error || 'Failed to save' };
    }

    return { success: true, data: result.data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error' 
    };
  }
}

export async function deleteData(options: DeleteDataOptions): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    const response = await fetch('/api/admin/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return { success: false, error: result.error || 'Failed to delete' };
    }

    return { success: true, data: result.data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error' 
    };
  }
}

export async function readData(dataType: DataType): Promise<{ success: boolean; data?: unknown; error?: string }> {
  try {
    const response = await fetch(`/api/admin/read?type=${dataType}`);
    const result = await response.json();
    
    if (!response.ok) {
      return { success: false, error: result.error || 'Failed to read' };
    }

    return { success: true, data: result.data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Network error' 
    };
  }
}

// Generate a unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

