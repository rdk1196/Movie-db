let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (
    numberOfFilms < 0 ||
    isNaN(numberOfFilms) ||
    !Number.isInteger(numberOfFilms)
  ) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}

start();

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDb.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDb.count <= 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDb.count > 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDb.privat === false) {
    console.log(personalMovieDb);
  } else {
    console.log("No access, personalMovieDb is private");
  }
}

function writeYourGenres() {
  for (let setOfQuestions = 0; setOfQuestions <= 2; setOfQuestions++) {
    let favoriteGenre = prompt(`Ваш любимый жанр под номером ${setOfQuestions + 1}`);
    personalMovieDb.genres[setOfQuestions] = favoriteGenre;
  }
}

writeYourGenres();
showMyDB();
