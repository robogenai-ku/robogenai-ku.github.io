-- RoboGenAI Database Setup Script
-- This script creates the initial database structure

-- Create institutions table
CREATE TABLE IF NOT EXISTS institutions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  logo TEXT,
  website TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  budget DECIMAL(12, 2),
  funding_body TEXT,
  status TEXT DEFAULT 'active',
  institution_id TEXT NOT NULL REFERENCES institutions(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create work_packages table
CREATE TABLE IF NOT EXISTS work_packages (
  id TEXT PRIMARY KEY,
  wp_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  objectives TEXT[] NOT NULL,
  lead_partner TEXT NOT NULL,
  start_month INTEGER NOT NULL,
  duration INTEGER NOT NULL,
  status TEXT DEFAULT 'in-progress',
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(project_id, wp_number)
);

-- Create tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  start_month INTEGER NOT NULL,
  duration INTEGER NOT NULL,
  status TEXT DEFAULT 'not-started',
  progress INTEGER DEFAULT 0,
  assignee TEXT,
  dependencies TEXT[] DEFAULT '{}',
  work_package_id TEXT NOT NULL REFERENCES work_packages(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create milestones table
CREATE TABLE IF NOT EXISTS milestones (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  target_month INTEGER NOT NULL,
  achieved BOOLEAN DEFAULT FALSE,
  achieved_at TIMESTAMP,
  work_package_id TEXT NOT NULL REFERENCES work_packages(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create publications table
CREATE TABLE IF NOT EXISTS publications (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT[] NOT NULL,
  type TEXT NOT NULL,
  venue TEXT,
  year INTEGER NOT NULL,
  month INTEGER,
  doi TEXT,
  url TEXT,
  pdf_url TEXT,
  abstract TEXT,
  keywords TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'published',
  citations INTEGER DEFAULT 0,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create media_assets table
CREATE TABLE IF NOT EXISTS media_assets (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT,
  category TEXT,
  tags TEXT[] DEFAULT '{}',
  captured_at TIMESTAMP,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  email TEXT,
  photo_url TEXT,
  bio TEXT,
  expertise TEXT[] DEFAULT '{}',
  orcid TEXT,
  linked_in TEXT,
  website TEXT,
  "order" INTEGER DEFAULT 999,
  is_active BOOLEAN DEFAULT TRUE,
  institution_id TEXT NOT NULL REFERENCES institutions(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_institution ON projects(institution_id);
CREATE INDEX IF NOT EXISTS idx_work_packages_project ON work_packages(project_id);
CREATE INDEX IF NOT EXISTS idx_tasks_work_package ON tasks(work_package_id);
CREATE INDEX IF NOT EXISTS idx_milestones_work_package ON milestones(work_package_id);
CREATE INDEX IF NOT EXISTS idx_publications_project ON publications(project_id);
CREATE INDEX IF NOT EXISTS idx_media_assets_project ON media_assets(project_id);
CREATE INDEX IF NOT EXISTS idx_team_members_institution ON team_members(institution_id);
