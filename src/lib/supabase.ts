import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  pdf_url?: string;
  abstract?: string;
  bibtex?: string;
  publication_type: 'journal' | 'conference' | 'book' | 'preprint';
  created_at: string;
  updated_at: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  published_date: string;
  is_featured: boolean;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'pi' | 'lab_admin' | 'phd_student' | 'masters_student' | 'postdoc' | 'visiting_scholar' | 'graduate';
  email?: string;
  bio?: string;
  research_interests?: string[];
  image_url?: string;
  linkedin_url?: string;
  google_scholar_url?: string;
  personal_website?: string;
  graduation_year?: number;
  current_position?: string;
  start_date?: string;
  end_date?: string;
  is_current: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ResearchArea {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

// Database functions
export const getPublications = async (filters?: {
  year?: number;
  type?: string;
  limit?: number;
}) => {
  let query = supabase
    .from('publications')
    .select('*')
    .order('year', { ascending: false });

  if (filters?.year) {
    query = query.eq('year', filters.year);
  }

  if (filters?.type) {
    query = query.eq('publication_type', filters.type);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching publications:', error);
    return [];
  }
  
  return data as Publication[];
};

export const getNews = async (filters?: {
  featured?: boolean;
  limit?: number;
}) => {
  let query = supabase
    .from('news')
    .select('*')
    .order('published_date', { ascending: false });

  if (filters?.featured) {
    query = query.eq('is_featured', true);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching news:', error);
    return [];
  }
  
  return data as News[];
};

export const getTeamMembers = async (filters?: {
  role?: string;
  current?: boolean;
}) => {
  let query = supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true });

  if (filters?.role) {
    query = query.eq('role', filters.role);
  }

  if (filters?.current !== undefined) {
    query = query.eq('is_current', filters.current);
  }

  const { data, error } = await query;
  
  if (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
  
  return data as TeamMember[];
};

export const getResearchAreas = async () => {
  const { data, error } = await supabase
    .from('research_areas')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching research areas:', error);
    return [];
  }
  
  return data as ResearchArea[];
};
