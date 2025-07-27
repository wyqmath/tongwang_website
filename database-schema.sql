-- Tong Wang Research Group Database Schema

-- Publications table
CREATE TABLE publications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    authors TEXT[] NOT NULL,
    journal TEXT,
    conference TEXT,
    year INTEGER NOT NULL,
    volume TEXT,
    pages TEXT,
    doi TEXT,
    pdf_url TEXT,
    abstract TEXT,
    bibtex TEXT,
    publication_type VARCHAR(20) CHECK (publication_type IN ('journal', 'conference', 'book', 'preprint')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- News table
CREATE TABLE news (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    published_date DATE NOT NULL,
    is_featured BOOLEAN DEFAULT FALSE,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Team members table
CREATE TABLE team_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('pi', 'lab_admin', 'phd_student', 'masters_student', 'postdoc', 'visiting_scholar', 'graduate')),
    email TEXT,
    bio TEXT,
    research_interests TEXT[],
    image_url TEXT,
    linkedin_url TEXT,
    google_scholar_url TEXT,
    personal_website TEXT,
    graduation_year INTEGER, -- for graduates
    current_position TEXT, -- for graduates
    start_date DATE,
    end_date DATE, -- for graduates or those who left
    is_current BOOLEAN DEFAULT TRUE,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Research areas table
CREATE TABLE research_areas (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Publication-research area junction table
CREATE TABLE publication_research_areas (
    publication_id UUID REFERENCES publications(id) ON DELETE CASCADE,
    research_area_id UUID REFERENCES research_areas(id) ON DELETE CASCADE,
    PRIMARY KEY (publication_id, research_area_id)
);

-- Team member-research area junction table
CREATE TABLE team_member_research_areas (
    team_member_id UUID REFERENCES team_members(id) ON DELETE CASCADE,
    research_area_id UUID REFERENCES research_areas(id) ON DELETE CASCADE,
    PRIMARY KEY (team_member_id, research_area_id)
);

-- Create indexes for better performance
CREATE INDEX idx_publications_year ON publications(year DESC);
CREATE INDEX idx_publications_type ON publications(publication_type);
CREATE INDEX idx_news_published_date ON news(published_date DESC);
CREATE INDEX idx_news_featured ON news(is_featured);
CREATE INDEX idx_team_members_role ON team_members(role);
CREATE INDEX idx_team_members_current ON team_members(is_current);
CREATE INDEX idx_team_members_display_order ON team_members(display_order);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_publications_updated_at BEFORE UPDATE ON publications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample research areas
INSERT INTO research_areas (name, description) VALUES
('Machine Learning', 'Advanced algorithms and methodologies for machine learning applications'),
('Artificial Intelligence', 'Theoretical foundations and practical applications of AI systems'),
('Data Science', 'Computational methods for extracting insights from complex datasets'),
('Deep Learning', 'Neural networks and deep learning architectures'),
('Computer Vision', 'Image processing and computer vision applications'),
('Natural Language Processing', 'Text processing and language understanding systems');

-- Insert sample team members
INSERT INTO team_members (name, role, email, bio, research_interests, display_order) VALUES
('Tong Wang', 'pi', 'tong.wang@university.edu', 'Professor Tong Wang is the Principal Investigator of the research group.', ARRAY['Machine Learning', 'Artificial Intelligence'], 1),
('Lab Administrator', 'lab_admin', 'admin@university.edu', 'Administrative support for the research group.', ARRAY[], 2);

-- Insert sample publications
INSERT INTO publications (title, authors, journal, year, volume, pages, abstract, publication_type) VALUES
('Advanced Machine Learning Techniques', ARRAY['Tong Wang', 'Co-Author 1'], 'Nature Machine Intelligence', 2024, '6', '123-145', 'This paper presents novel approaches to machine learning algorithms with applications in various domains.', 'journal'),
('Deep Learning Applications', ARRAY['Tong Wang', 'Student A'], 'International Conference on Machine Learning', 2024, NULL, '1-12', 'This work explores the application of deep learning techniques to solve complex real-world problems.', 'conference');

-- Insert sample news
INSERT INTO news (title, content, excerpt, published_date, is_featured) VALUES
('New Research Grant Awarded', 'We are excited to announce that our research group has been awarded a significant grant from the National Science Foundation...', 'Research group awarded NSF grant for machine learning research.', '2025-01-15', TRUE),
('Paper Accepted at ICML 2025', 'Our latest research paper on deep learning optimization has been accepted for presentation at ICML 2025...', 'Latest research accepted at top-tier conference.', '2024-12-20', TRUE);
