-- script that uses the hbtn_0d_tvshows database to list all genres not linked to the show Dexter
SELECT DISTINCT tg.name
  FROM tv_genres AS tg
 WHERE tg.name NOT IN
       (SELECT DISTINCT tg.name
        FROM tv_shows AS ts
            INNER JOIN tv_show_genres AS tsg
            ON ts.id = tsg.show_id
            LEFT JOIN tv_genres AS tg
            ON tsg.genre_id = tg.id
        WHERE ts.title = 'Dexter')
 ORDER BY tg.name;