// This are three main functions used in the application

//limit to top 10
const moviesOnLoad = "select m.movie_title, m.movie_duration, r.rating_type from MOVIE as m join MOVIE_CAST as c on m.movie_id = c.movie_id join MOVIE_RATING as mr on m.movie_id = mr.movie_id join RATING as r on mr.rating_id = r.rating_id group by m.movie_title, m.movie_duration, r.rating_type order by m.movie_title"

const findMovieByActor = "select m.movie_title, m.movie_duration, r.rating_type from MOVIE as m join MOVIE_CAST as c on m.movie_id = c.movie_id join MOVIE_RATING as mr on m.movie_id = mr.movie_id join RATING as r on mr.rating_id = r.rating_id join ACTOR as a on c.actor_id = a.actor_id where a.actor_name = 'Eddie Murphy'"

const findMoviesHighRating = "select m.movie_title, m.movie_duration, r.rating_type from MOVIE as m join MOVIE_CAST as c on m.movie_id = c.movie_id join MOVIE_RATING as mr on m.movie_id = mr.movie_id join RATING as r on mr.rating_id = r.rating_id group by m.movie_title, m.movie_duration, r.rating_type order by r.rating_type"

const findMoviesSpecificDuration = "select m.movie_title, m.movie_duration, r.rating_type from MOVIE as m join MOVIE_CAST as c on m.movie_id = c.movie_id join MOVIE_RATING as mr on m.movie_id = mr.movie_id join RATING as r on mr.rating_id = r.rating_id where m.movie_duration > 60 and m.movie_duration < 120 group by m.movie_title, m.movie_duration, r.rating_type order by m.movie_title"

module.exports = {findMovieByActor, findMoviesHighRating, findMoviesSpecificDuration, moviesOnLoad};