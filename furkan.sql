CREATE DATABASE furkan_portfolio;
USE furkan_portfolio;

-- Projeleri tutan tablo
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    description TEXT,
    project_url VARCHAR(255)
);

-- İletişim mesajlarını tutan tablo
CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_name VARCHAR(100),
    sender_email VARCHAR(100),
    message_text TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);