"use strict";
// // alert('Hello');
// // const result = confirm("Are you here?")
// //console.log(result);

// // const answer = prompt("Are you 18?", "18");
// // console.log(typeof(answer));

// //const answers = [];

// //answers[0] = prompt("What is your name?", "");
// //answers[1] = prompt("What is your surname?", "");
// //answers[2] = prompt("How old are you?", "");

// // document.write(answers);

// //console.log(typeof(answers));
// // console.log(typeof(null)); object - it is an error!!!

// //const user = "Yulia";
// //alert(`Hello, ${user}`)

// //create viarable and insert the answer in it
// const numberOfFilms = +prompt('How many movies have you seen?', ''); //enarniy + and it will be a number

// //Create an object and isert next properties 
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {}, //empty object
//     actors: {},
//     genres: [],
//     privat: false
// };

// //ask user 2 questions: How many movies have you seen? and How would you rate it?
// // answers should be inserted in separate variables and answer write in object movies in a format:
// //movies: {
//     //'login': '8.1'
// //}
// //and check if that works with no error in console page
// const a = prompt('How many movies have you seen?', ''),
//       b = prompt('How would you rate it?', ''),
//       c = prompt('How many movies have you seen?', ''),
//       d = prompt('How would you rate it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if(num < 49) {
    console.log('Error');
} else if(num > 100) {
    console.log('Too much');
} else {
    console.log("Ok");
}

(num === 50) ? console.log('Ok') : console.log('Error');

const number = 6;

switch(number) {
    case 49:
        console.log('not Correct');
        break;
    case 100:
        console.log('Wrong');
        break;
    case 50:
        console.log('You got it');
        break;
    default:
        console.log('Opps not this time');
        break; 
}