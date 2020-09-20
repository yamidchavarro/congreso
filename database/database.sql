START TRANSACTION;
CREATE DATABASE congreso; 
USE congreso;

CREATE TABLE type_docu(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180), 
    name_short VARCHAR(20),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE modality(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE modality_project(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE main_theme(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE country(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180), 
    name_short VARCHAR(20),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE departament(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180), 
    name_short VARCHAR(20),
    country_id int,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (country_id) REFERENCES country(id)
);

CREATE TABLE city(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180), 
    name_short VARCHAR(20),
    departament_id int,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (departament_id) REFERENCES departament(id)
);


CREATE TABLE user_register(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(180) NOT NULL, 
    last_name VARCHAR(180) NOT NULL,
    document INT(11) NOT NULL,
    type_docu_id INT NOT NULL,
    position VARCHAR(250) NOT NULL,
    email VARCHAR(100) NOT NULL,
    city_id INT NOT NULL,
    modality_id INT NOT NULL,
    sena_center VARCHAR(180) NULL,
    email_center VARCHAR(100) NULL,
    name_project VARCHAR(180) NULL,
    main_theme_id INT NULL,
    project_owner VARCHAR(180) NULL,
    summary LONGTEXT NULL,
    entity VARCHAR(180) NULL,
    university_center VARCHAR(250) NULL,
    modality_project_id INT NULL,
    url_poster TEXT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (type_docu_id) REFERENCES type_docu(id),
    FOREIGN KEY (city_id) REFERENCES city(id),
    FOREIGN KEY (modality_id) REFERENCES modality(id),
    FOREIGN KEY (main_theme_id) REFERENCES main_theme(id),
    FOREIGN KEY (modality_project_id) REFERENCES modality_project(id)
);
COMMIT;

