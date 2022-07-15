var movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

const userInput = document.getElementById("input"); //This gets the userInput
const submitBtn = document.getElementById("button1"); //This gets the submit button
const hintBtn = document.getElementById("button"); //This gets the hint button
const cardBody = document.getElementById("cardBody"); //This gets the card body
const containerBody = document.getElementById("containerBody"); //This gets the container body
var movieClue = document.getElementById("movie-clue"); //This allows me to put the movie clue as a text on the html page
var movieDiv = document.createElement('div');


/*
* This function randomly gets a movie from the movies array.
*/

function getRandomMovie(arr){
    let randNum = Math.round(Math.random()*movies.length);
    return movies[randNum];
}

var movie = getRandomMovie(movies); //this selects a random movie from the list of movies that were provided
const movieTitle = movie.title;

console.log(movieTitle);


//this displays the movie clue/question on the webpage
movieDiv.innerHTML = movie.explanation;
movieDiv.style.textAlign = "center"; 
movieClue.append(movieDiv);


//this is for the movie title (correct)
var resultDiv = document.createElement('div');
resultDiv.style.textAlign = "center"
resultDiv.innerHTML = "Correct! Good Job :)";


//this is for the movie title (incorrect)
var resultDiv2 = document.createElement('div');
resultDiv2.style.textAlign = "center";
resultDiv2.innerHTML = "Incorrect, try again.";


//this is for the movie hint
var resultDiv1 = document.createElement('div');
resultDiv1.style.textAlign = "center";
resultDiv1.innerHTML = movie.hint


hintBtn.addEventListener('click', (event) => {
    resultDiv1.classList.add('alert');
    resultDiv1.classList.add('alert-secondary');
    resultDiv1.classList.add('m-4');
    cardBody.append(resultDiv1);
})


submitBtn.addEventListener('click', (inputs) => {

    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-success');
    resultDiv.classList.add('m-4');

    resultDiv2.classList.add('alert');
    resultDiv2.classList.add('alert-danger');
    resultDiv2.classList.add('m-4');

    const check = userInput === movieTitle ? containerBody.append(resultDiv) : containerBody.append(resultDiv2);
    
    // if(userInput === movieTitle){
    //     containerBody.append(resultDiv);
    // }
    // else if(userInput !== movieTitle){
    //     containerBody.append(resultDiv2);
    // }
})














   