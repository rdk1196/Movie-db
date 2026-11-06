const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let setOfQuestions = 0;

// do {
//   let lastWatchedMovie = prompt("Один из последниx просмотренных фильмов?"),
//     movieRating = +prompt("На сколько оцените его");
//   if (
//     lastWatchedMovie != null &&
//     lastWatchedMovie.length > 0 &&
//     lastWatchedMovie.length <= 50 &&
//     !isNaN(movieRating) &&
//     movieRating > 0
//   ) {
//     personalMovieDb.movies[lastWatchedMovie] = movieRating;
//     setOfQuestions += 1;
//   }
// } while (setOfQuestions < 2);

// while (setOfQuestions < 2);
// {
//   let lastWatchedMovie = prompt("Один из последниx просмотренных фильмов?"),
//     movieRating = +prompt("На сколько оцените его");
//   if (
//     lastWatchedMovie != null &&
//     lastWatchedMovie.length > 0 &&
//     lastWatchedMovie.length <= 50 &&
//     !isNaN(movieRating) &&
//     movieRating > 0
//   ) {
//     personalMovieDb.movies[lastWatchedMovie] = movieRating;
//     setOfQuestions += 1;
//   }
// }

for (let setOfQuestions = 0; setOfQuestions < 2; setOfQuestions++) {
  let lastWatchedMovie = prompt("Один из последниx просмотренных фильмов?"),
    movieRating = +prompt("На сколько оцените его");

  if (
    lastWatchedMovie === null ||
    lastWatchedMovie.length === 0 ||
    lastWatchedMovie.length > 50 ||
    isNaN(movieRating) ||
    movieRating <= 0
  ) {
    setOfQuestions -= 1;
  } else {
    personalMovieDb.movies[lastWatchedMovie] = movieRating;
  }
}

if (personalMovieDb.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDb.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDb.count > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
