-- Create database schema if it doesn't exist
CREATE DATABASE IF NOT EXISTS mdd_db;

-- Use the created schema
USE mdd_db;

-- Drop tables if they exist
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS topics;
DROP TABLE IF EXISTS user_topic_subscription; 

-- Create users table
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create topics table
CREATE TABLE topics (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create posts table
CREATE TABLE posts (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id BIGINT NOT NULL,
    topic_id BIGINT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- Create comments table
CREATE TABLE comments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    content TEXT NOT NULL,
    user_id BIGINT NOT NULL,
    post_id BIGINT NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- Create user_topic_subscription table for many-to-many relationship
CREATE TABLE user_topic_subscription (
    user_id BIGINT,
    topic_id BIGINT,
    PRIMARY KEY (user_id, topic_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (topic_id) REFERENCES topics(id) ON DELETE CASCADE
);



-- Insert test data into users table
INSERT INTO users (email, username, password, admin) VALUES 
('user1@example.com', 'user1', '$2a$10$examplehash1', false),
('user2@example.com', 'user2', '$2a$10$examplehash2', false),
('admin@example.com', 'admin', '$2a$10$adminhash', true);

-- Insert test data into topics table
INSERT INTO topics (name) VALUES 
('JavaScript'),
('Java'),
('Python');

-- Insert test data into posts table
INSERT INTO posts (title, content, user_id, topic_id, date_created) VALUES 
('First Post', 'Content of the first post', 1, 1, NOW()),
('Second Post', 'Content of the second post', 2, 2, NOW());

-- Insert test data into comments table
INSERT INTO comments (content, user_id, post_id, date_created) VALUES 
('First comment', 1, 1, NOW()),
('Second comment', 2, 2, NOW());

-- Insert subscriptions into user_topic_subscription table 
INSERT INTO user_topic_subscription (user_id, topic_id) VALUES
(1, 1), 
(2, 2), 
(1, 3); 
