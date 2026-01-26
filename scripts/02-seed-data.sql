-- RoboGenAI Seed Data
-- This script populates the database with initial project data

-- Insert institutions
INSERT INTO institutions (id, name, country, website) VALUES
('inst_1', 'Universidad Politécnica de Madrid', 'Spain', 'https://www.upm.es'),
('inst_2', 'INESC TEC', 'Portugal', 'https://www.inesctec.pt'),
('inst_3', 'University of Porto', 'Portugal', 'https://www.up.pt');

-- Insert main project
INSERT INTO projects (id, name, description, start_date, end_date, funding_body, status, institution_id) VALUES
('proj_1', 'RoboGenAI', 'Integration of Generative AI and Vision Language Models in Underwater Robotic Systems for Marine Exploration and Monitoring', '2024-01-01', '2026-12-31', 'European Commission', 'active', 'inst_1');

-- Insert Work Packages
INSERT INTO work_packages (id, wp_number, title, description, objectives, lead_partner, start_month, duration, status, project_id) VALUES
('wp_1', 1, 'ROV Development & Integration', 'Design and development of a robust underwater ROV platform equipped with sensors, cameras, and communication systems suitable for integration with AI models.', ARRAY['Design ROV mechanical structure', 'Integrate sensors and cameras', 'Implement communication protocols', 'Ensure waterproof housing and durability'], 'Universidad Politécnica de Madrid', 0, 12, 'in-progress', 'proj_1'),

('wp_2', 2, 'Perception & Communication Systems', 'Development of perception systems including 3D mapping, visual question answering, and image captioning using Vision Language Models (VLMs).', ARRAY['Implement 3D mapping and reconstruction', 'Develop VQA system for underwater queries', 'Create image captioning for marine species', 'Build multimodal communication interface'], 'INESC TEC', 6, 18, 'in-progress', 'proj_1'),

('wp_3', 3, 'Multi-Robot Decision Making', 'Development of decision-making algorithms for coordinating multiple ROVs using generative AI for path planning and task allocation.', ARRAY['Implement multi-agent coordination', 'Develop GenAI-based path planning', 'Create task allocation algorithms', 'Build collision avoidance systems'], 'University of Porto', 12, 15, 'not-started', 'proj_1'),

('wp_4', 4, 'Testing & Validation', 'Comprehensive testing in simulation, controlled pool environments, and real-world marine scenarios to validate system performance.', ARRAY['Conduct simulation testing', 'Perform pool tests', 'Execute field trials', 'Validate AI model accuracy'], 'Universidad Politécnica de Madrid', 18, 12, 'not-started', 'proj_1'),

('wp_5', 5, 'Dissemination & Exploitation', 'Publication of research findings, presentation at conferences, and engagement with the scientific and industrial community.', ARRAY['Publish research papers', 'Present at conferences', 'Create documentation', 'Engage with stakeholders'], 'INESC TEC', 0, 36, 'in-progress', 'proj_1');

-- Insert Tasks for WP1
INSERT INTO tasks (id, title, description, start_month, duration, status, progress, work_package_id) VALUES
('task_1_1', 'ROV Mechanical Design', 'Complete mechanical design and structural analysis of ROV frame', 0, 3, 'completed', 100, 'wp_1'),
('task_1_2', 'Sensor Integration', 'Integrate cameras, sonar, and environmental sensors', 3, 4, 'in-progress', 70, 'wp_1'),
('task_1_3', 'Communication System Setup', 'Implement underwater acoustic communication', 6, 3, 'in-progress', 40, 'wp_1'),
('task_1_4', 'System Integration Testing', 'Test integrated ROV systems', 9, 3, 'not-started', 0, 'wp_1');

-- Insert Tasks for WP2
INSERT INTO tasks (id, title, description, start_month, duration, status, progress, work_package_id) VALUES
('task_2_1', '3D Mapping Implementation', 'Develop 3D reconstruction algorithms from stereo vision', 6, 6, 'in-progress', 50, 'wp_2'),
('task_2_2', 'VQA Model Development', 'Train and deploy Visual Question Answering model', 9, 6, 'in-progress', 30, 'wp_2'),
('task_2_3', 'Image Captioning System', 'Build marine species identification and captioning', 12, 6, 'not-started', 0, 'wp_2'),
('task_2_4', 'Multimodal Interface', 'Create user interface for human-robot interaction', 18, 6, 'not-started', 0, 'wp_2');

-- Insert Tasks for WP3
INSERT INTO tasks (id, title, description, start_month, duration, status, progress, work_package_id) VALUES
('task_3_1', 'Multi-Agent Framework', 'Develop coordination framework for multiple ROVs', 12, 5, 'not-started', 0, 'wp_3'),
('task_3_2', 'GenAI Path Planning', 'Implement generative AI for dynamic path planning', 15, 6, 'not-started', 0, 'wp_3'),
('task_3_3', 'Task Allocation Algorithm', 'Create optimal task distribution among robots', 18, 4, 'not-started', 0, 'wp_3'),
('task_3_4', 'Collision Avoidance', 'Build real-time collision avoidance system', 21, 6, 'not-started', 0, 'wp_3');

-- Insert Milestones
INSERT INTO milestones (id, title, description, target_month, achieved, work_package_id) VALUES
('ms_1_1', 'ROV Prototype Complete', 'First functional ROV prototype ready for testing', 9, true, 'wp_1'),
('ms_1_2', 'ROV Field Ready', 'ROV certified for field deployment', 12, false, 'wp_1'),
('ms_2_1', '3D Mapping Operational', '3D reconstruction system operational', 12, false, 'wp_2'),
('ms_2_2', 'VQA System Deployed', 'VQA model integrated and tested', 15, false, 'wp_2'),
('ms_3_1', 'Multi-Robot Coordination Active', 'Multiple ROVs coordinating successfully', 21, false, 'wp_3'),
('ms_4_1', 'Simulation Tests Complete', 'All simulation scenarios validated', 24, false, 'wp_4'),
('ms_4_2', 'Field Trials Complete', 'Real-world marine testing finished', 30, false, 'wp_4');

-- Insert Sample Publications
INSERT INTO publications (id, title, authors, type, venue, year, month, keywords, status, project_id) VALUES
('pub_1', 'Integration of VLMs in Underwater Robotics: A Survey', ARRAY['García, A.', 'Silva, P.', 'Costa, M.'], 'journal', 'IEEE Journal of Oceanic Engineering', 2024, 6, ARRAY['underwater robotics', 'vision language models', 'marine exploration'], 'published', 'proj_1'),
('pub_2', 'Real-time 3D Mapping for Autonomous Underwater Vehicles', ARRAY['Silva, P.', 'Oliveira, R.'], 'conference', 'ICRA 2024', 2024, 9, ARRAY['3D mapping', 'AUV', 'SLAM'], 'published', 'proj_1'),
('pub_3', 'Multi-Robot Coordination using Generative AI for Marine Monitoring', ARRAY['Costa, M.', 'García, A.'], 'preprint', 'arXiv', 2024, 11, ARRAY['multi-robot systems', 'generative AI', 'coordination'], 'submitted', 'proj_1');

-- Insert Sample Team Members
INSERT INTO team_members (id, name, role, email, expertise, is_active, "order", institution_id) VALUES
('tm_1', 'Dr. Ana García', 'Principal Investigator', 'ana.garcia@upm.es', ARRAY['Underwater Robotics', 'AI Integration', 'Control Systems'], true, 1, 'inst_1'),
('tm_2', 'Dr. Pedro Silva', 'Senior Researcher', 'pedro.silva@inesctec.pt', ARRAY['Computer Vision', 'Machine Learning', 'VLMs'], true, 2, 'inst_2'),
('tm_3', 'Dr. Maria Costa', 'Researcher', 'maria.costa@up.pt', ARRAY['Multi-Robot Systems', 'Path Planning', 'Coordination'], true, 3, 'inst_3'),
('tm_4', 'João Oliveira', 'PhD Student', 'joao.oliveira@inesctec.pt', ARRAY['3D Reconstruction', 'SLAM', 'Sensor Fusion'], true, 4, 'inst_2'),
('tm_5', 'Laura Fernández', 'Research Engineer', 'laura.fernandez@upm.es', ARRAY['ROV Design', 'Hardware Integration', 'Testing'], true, 5, 'inst_1');

-- Insert Sample Media Assets
INSERT INTO media_assets (id, title, description, type, url, category, tags, project_id) VALUES
('media_1', 'ROV Prototype Assembly', 'First prototype during assembly phase', 'image', '/placeholder.svg?height=400&width=600', 'rov', ARRAY['prototype', 'assembly', 'hardware'], 'proj_1'),
('media_2', 'Pool Testing Session', 'Initial pool tests of ROV navigation', 'video', '/placeholder.svg?height=400&width=600', 'test-results', ARRAY['testing', 'pool', 'navigation'], 'proj_1'),
('media_3', '3D Underwater Map', 'Generated 3D reconstruction of coral reef', 'image', '/placeholder.svg?height=400&width=600', 'mapping', ARRAY['3D mapping', 'coral', 'reconstruction'], 'proj_1'),
('media_4', 'Multi-Robot Coordination', 'Three ROVs coordinating in formation', 'image', '/placeholder.svg?height=400&width=600', 'multi-robot', ARRAY['coordination', 'multi-robot', 'formation'], 'proj_1');
