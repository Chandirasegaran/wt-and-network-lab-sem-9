CREATE DATABASE IF NOT EXISTS studentreg;
use studentreg;
CREATE TABLE IF NOT EXISTS student_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    regno VARCHAR(20) NOT NULL,
    fname VARCHAR(255) NOT NULL,
    mname VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    course VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    resume_path VARCHAR(255) NOT NULL
);

SELECT *FROM student_profiles;