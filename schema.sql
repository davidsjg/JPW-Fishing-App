### Schema
CREATE DATABASE jpwf_db;
USE jpwf_db;

CREATE TABLE lakes
(
	id int NOT NULL AUTO_INCREMENT,
	lake varchar(255) NOT NULL,
    acres int NOT NULL,
    yearStocked int NOT NULL,
	cutNum int NOT NULL,
    cutLength int NOT NULL,
    cutRange int NOT NULL,
    brookNum int NOT NULL,
    brookLength int NOT NULL,
    brookRange int NOT NULL,
    distance int NOT NULL,
    elevGain int NOT NULL,
	PRIMARY KEY (id)
);
