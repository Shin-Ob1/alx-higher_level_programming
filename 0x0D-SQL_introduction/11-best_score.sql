-- script to list all records with a score >= 10 in second_table of hbtn_0c_0 database
SELECT score, name FROM `second_table` WHERE score >= 10 ORDER BY score DESC;
