-- Partie délétion de table
DROP TABLE IF EXISTS pannel CASCADE;
DROP TABLE IF EXISTS website CASCADE;
DROP TABLE IF EXISTS tblWebsitepannels;

-- Partie délétion de ligne

-- Partie création de table
CREATE TABLE IF NOT EXISTS website(
    id_website int UNSIGNED NOT NULL AUTO_INCREMENT,
    title varchar(32) NOT NULL,
    lien varchar(32) NULL,
    CONSTRAINT website_PK PRIMARY KEY(id_website)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS pannel (
    id_pannel int UNSIGNED NOT NULL AUTO_INCREMENT,
    src varchar(32) NOT NULL, 
    alt varchar(64) NULL,
    caption varchar(255) NULL,
    date_ajout date NOT NULL,
    mots_clefs varchar(255) DEFAULT NULL,
    id_website int UNSIGNED NOT NULL,
    CONSTRAINT pannel_PK PRIMARY KEY(id_pannel),
    CONSTRAINT pannel_FK FOREIGN KEY(id_website) REFERENCES website(id_website)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Partie ajout de ligne

INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), 'knacks', 1);


INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), '', 2);


INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), 'knacks/walou', 3);


INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), '', 4);


INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), '', 5);


INSERT INTO website (title, lien)
VALUES ('Trust me i am a website', '#labo');

INSERT INTO pannel (src, alt, caption, date_ajout, mots_clefs, id_website)
VALUES ('bd/placeholder.jpg', 'Bateau en eau tropical', 'Nan jte jure wesh', CURRENT_DATE(), '', 6);