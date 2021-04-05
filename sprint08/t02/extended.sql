USE ucode_web;
CREATE TABLE IF NOT EXISTS powers
(
    id INT,
    hero_id INT,
    PowerName VARCHAR(30) ,
    type ENUM("attack","defense"),
    points INT,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);
CREATE TABLE IF NOT EXISTS races
(
    id INT,
    hero_id INT,
    RaceNаme VARCHAR(30) ,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

CREATE TABLE IF NOT EXISTS teams
(
    id INT,
    hero_id INT,
    TeamNаme VARCHAR(30) ,
    FOREIGN KEY (hero_id) REFERENCES heroes(id)
);

INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 0, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 1, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 2, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 3, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 4, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 5, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 6, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 7, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 8, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 9, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 10, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 11, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 12, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 13, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 14, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 15, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 16, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 17, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 18, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 19, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 20, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 21, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 22, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 23, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 24, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 25, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 26, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 27, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 28, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 29, 'Human');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 30, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 31, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 32, 'Titan');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 33, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 34, 'Kree');
INSERT INTO races(id,hero_id, RaceNаme) VALUES(0, 35, 'Kree');
-- _______________________________________________________teams_______________________________________________________________________
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 0, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 1, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 2, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 3, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 4, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 5, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 6, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 7, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 8, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 9, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 10, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 11, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 12, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 13, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 14, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 15, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 16, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 17, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 18, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 19, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 20, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 21, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 22, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 23, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 24, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 25, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 26, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 27, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 28, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(0, 29, 'Avengers');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 30, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 31, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(1, 32, 'Hydra');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 33, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 34, 'S.H.I.E.L.D.');
INSERT INTO teams(id,hero_id, TeamNаme) VALUES(2, 35, 'S.H.I.E.L.D.');
-- _______________________________________________________teams_______________________________________________________________________
-- INSERT INTO teams(id,hero_id, name) VALUES(1, 2, 'Avengers');
-- INSERT INTO teams(id,hero_id, name) VALUES(1, 6, 'Avengers');
-- INSERT INTO teams(id,hero_id, name) VALUES(2, 1, 'Hydra');
INSERT INTO powers(hero_id, PowerName, points, type) VALUES(6, 'iron shield', 200, 'defense');