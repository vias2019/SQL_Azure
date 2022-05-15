SELECT TOP (5) *
  FROM MOVIE;

SELECT TOP (5) *
  FROM MOVIE_CAST;

SELECT TOP (5) *
  FROM ACTOR;

SELECT TOP (5) *
  FROM MOVIE_RATING;
SELECT TOP (5) *
  FROM RATING;

select actor_id
from ACTOR
where actor_name = 'Eddie Murphy'

--select movies, duration, and rating for the load
select m.movie_title, m.movie_duration, r.rating_type
from MOVIE as m
join MOVIE_CAST as c on m.movie_id = c.movie_id
join MOVIE_RATING as mr on m.movie_id = mr.movie_id
join RATING as r on mr.rating_id = r.rating_id
group by m.movie_title, m.movie_duration, r.rating_type
order by m.movie_title

--select movies with Eddie Murphy
select m.movie_title, m.movie_duration, r.rating_type
from MOVIE as m
join MOVIE_CAST as c on m.movie_id = c.movie_id
join MOVIE_RATING as mr on m.movie_id = mr.movie_id
join RATING as r on mr.rating_id = r.rating_id
join ACTOR as a on c.actor_id = a.actor_id
where a.actor_name = 'Eddie Murphy'

--select movies with highest rating (less restrictions)
select m.movie_title, m.movie_duration, r.rating_type
from MOVIE as m
join MOVIE_CAST as c on m.movie_id = c.movie_id
join MOVIE_RATING as mr on m.movie_id = mr.movie_id
join RATING as r on mr.rating_id = r.rating_id
group by m.movie_title, m.movie_duration, r.rating_type
order by r.rating_type

--select movies with more than 60 and less that 120 minutes of duration
select m.movie_title, m.movie_duration, r.rating_type
from MOVIE as m
join MOVIE_CAST as c on m.movie_id = c.movie_id
join MOVIE_RATING as mr on m.movie_id = mr.movie_id
join RATING as r on mr.rating_id = r.rating_id
where m.movie_duration > 60 and m.movie_duration < 120
group by m.movie_title, m.movie_duration, r.rating_type
order by m.movie_title