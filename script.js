
//create viarable and insert the answer in it
const numberOfFilms = +promt('How many movies have you seen?', ''); //enarniy + and it will be a number

//Create an object and isert next properties 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, //empty object
    actors: {},
    genres: [],
    privat: false
};

//ask user 2 questions: How many movies have you seen? and How would you rate it?
// answers should be inserted in separate variables and answer write in object movies in a format:
//movies: {
    //'login': '8.1'
//}
//and check if that works with no error in console page
const a = prompt('How many movies have you seen?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('How many movies have you seen?', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

