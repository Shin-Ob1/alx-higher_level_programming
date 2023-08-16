-- script that creates the MySQL user user_0d_1
-- This user should have all privileges on MySQL server
-- Password should be set to user_0d_1_pwd

CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';
