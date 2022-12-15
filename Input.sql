-- Partie délétion de table
DROP TABLE tblWebsitepannels;

-- Partie délétion de ligne

-- Partie création de table
CREATE TABLE tblWebsitepannels (
    src varchar(32) NOT NULL, 
    alt varchar(64),
    title varchar(32),
    caption varchar(255),
    lien varchar(32),
    date_ajout date,
    mots_clefs varchar(255) DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Partie ajout de ligne


INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout, mots_clefs)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15', 'bateau/disco');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout, mots_clefs) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15', 'bateau');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout, mots_clefs) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15', 'bateau');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Super', 'Capitaine abandonné', '#labo', '2022-12-15');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15');

INSERT INTO tblWebsitepannels (src, alt, title, caption, lien, date_ajout) 
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Ohé Ohé !!', 'Capitaine abandonné', '#labo', '2022-12-15');