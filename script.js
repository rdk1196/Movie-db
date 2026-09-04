const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`);

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};