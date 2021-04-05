USE ucode_web;
SELECT heroes.name, teams.TeamNаme  FROM heroes LEFT JOIN teams ON teams.hero_id = heroes.id;
SELECT heroes.name, powers.PowerName  FROM powers LEFT JOIN heroes ON powers.hero_id = heroes.id;
SELECT heroes.name, powers.PowerName, teams.TeamNаme  FROM heroes JOIN powers ON powers.hero_id = heroes.id JOIN teams ON teams.hero_id = heroes.id;