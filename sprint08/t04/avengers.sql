use ucode_web;
SELECT summ as power, name FROM ( 
    SELECT heroes.name as name, sum(powers.points) AS summ FROM heroes JOIN powers ON powers.hero_id = heroes.id group by heroes.id) a
ORDER BY summ DESC limit 1;
SELECT summ as power, name FROM ( 
    SELECT heroes.name as name, sum(table1.points) AS summ FROM heroes JOIN ( 
        SELECT hero_id, points FROM powers where type = 'defense') table1 ON table1.hero_id = heroes.id group by heroes.id) a
ORDER BY power ASC limit 1;
SELECT summ as power, name FROM ( 
    SELECT heroes.name as name, sum(powers.points) AS summ from heroes JOIN ( 
        SELECT hero_id FROM teams WHERE TeamNаme = 'Avengers' ) table1 ON table1.hero_id = heroes.id JOIN powers ON powers.hero_id = heroes.id group by heroes.id ) a
ORDER BY power DESC;
SELECT summ as power, name FROM (
    SELECT teams.TeamNаme as name, sum(powers.points) AS summ FROM teams JOIN powers ON powers.hero_id = teams.hero_id group by name) a
ORDER BY power ASC;