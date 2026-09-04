const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const 
    lastWathcedMovie =  prompt("Один из последниз просмотренных фильмов?"),
    MovieRating = +prompt("На сколько оцените его"),
    lastWathcedMovie2 =  prompt("Один из последниз просмотренных фильмов?"),
    MovieRating2 = +prompt("На сколько оцените его");

personalMovieDb.movies[lastWathcedMovie] = MovieRating;
personalMovieDb.movies[lastWathcedMovie2] = MovieRating2;


console.log(personalMovieDb);