CREATE DATABASE dma;

-- Users Table
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    age INTEGER,
    location VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'volunteer')),
    contact_info VARCHAR(255)
);

-- Volunteer Profiles Table
CREATE TABLE volunteer_profiles (
    user_id INTEGER PRIMARY KEY,
    tasks TEXT,
    task_location VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Donations Table
CREATE TABLE donations (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    donor_info VARCHAR(255),
    date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Crises Table
CREATE TABLE crises (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    severity VARCHAR(20) NOT NULL CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'approved', 'resolved')),
    reported_by INTEGER,
    report_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    image_url VARCHAR(255),
    required_help TEXT,
    FOREIGN KEY (reported_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Inventory Items Table
CREATE TABLE inventory_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('relief', 'expense')),
    quantity INTEGER NOT NULL CHECK (quantity >= 0),
    purchased_by INTEGER,
    purchase_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (purchased_by) REFERENCES users(id)
);

-- Expenses Table
CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    amount DECIMAL(10, 2) NOT NULL CHECK (amount > 0),
    description TEXT,
    date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Assignments Table
CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    volunteer_id INTEGER NOT NULL,
    crisis_id INTEGER NOT NULL,
    task_description TEXT,
    assigned_by INTEGER,
    assigned_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (volunteer_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (crisis_id) REFERENCES crises(id) ON DELETE CASCADE,
    FOREIGN KEY (assigned_by) REFERENCES users(id)
);

-- Reports Table (Optional)
CREATE TABLE reports (
    id SERIAL PRIMARY KEY,
    report_type VARCHAR(50) NOT NULL,
    generated_by INTEGER NOT NULL,
    generated_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    file_path VARCHAR(255),
    FOREIGN KEY (generated_by) REFERENCES users(id)
);

-- Volunteer Registrations Table
CREATE TABLE volunteer_registrations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    registration_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    approved BOOLEAN NOT NULL DEFAULT FALSE,
    approved_by INTEGER,
    approval_date TIMESTAMP WITHOUT TIME ZONE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (approved_by) REFERENCES users(id)
);

-- Images Table (Optional)
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    crisis_id INTEGER,
    user_id INTEGER,
    image_url VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (crisis_id) REFERENCES crises(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Donations Summary View (Optional)
CREATE VIEW donations_summary AS
SELECT
    SUM(amount) AS total_donations,
    DATE(date) AS donation_date
FROM
    donations
GROUP BY
    DATE(date)
ORDER BY
    donation_date;

-- Expenses Summary View (Optional)
CREATE VIEW expenses_summary AS
SELECT
    SUM(amount) AS total_expenses,
    DATE(date) AS expense_date
FROM
    expenses
GROUP BY
    DATE(date)
ORDER BY
    expense_date;

-- Index on Crises Severity
CREATE INDEX idx_crises_severity ON crises(severity);

-- Index on Crises Status
CREATE INDEX idx_crises_status ON crises(status);

-- Index on Donations Date
CREATE INDEX idx_donations_date ON donations(date);

-- Index on Expenses Date
CREATE INDEX idx_expenses_date ON expenses(date);

-- Index on Inventory Items Type
CREATE INDEX idx_inventory_items_type ON inventory_items(type);
