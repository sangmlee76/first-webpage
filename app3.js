/* 
This function offers a prompt to obtain user name, then 
the function returns a welcome message to the user
*/
function getName(){
    var userName = prompt('Please enter your name!');
    welcome = "Welcome " + userName + "!"
    return welcome
}

/*
This function collects user vote for the best burger and if a valid vote is cast, then
the function returns the user's vote and the associated star rating, is applicable.
*/

function userVote(){
    var userInput = prompt("Please vote: Input '1' for Burger 1, Input '2' for Burger 2, and Input '3' for Burger 3. Type '0' to abstain.");

    while (userInput != 1 && userInput !=2 && userInput != 3 && userInput != 0){
        userInput = prompt("Please vote: Input '1' for Burger 1, Input '2' for Burger 2, and Input '3' for Burger 3. Type '0' to abstain.");
    }

    var starOutput = ''
    var stars = '<img src="star.jpg" width="20" />'
    var Burger_1 = 0;
    var Burger_2 = 0;
    var Burger_3 = 0;

    if (userInput == 0) {
        alert('Have a nice day!');
    } else if (userInput == 1) {
        Burger_1++;
    } else if (userInput == 2) {
        Burger_2++;
    } else if (userInput == 3) {
        Burger_3++;
    } else {
        userInput = prompt("Please enter a valid option: 1, 2, or 3. If you wish abstain, type 0");
    }

    // sets the variable that will become the return value for the user's vote
    var voteOutput = '<li> <b>Burger 1:</b>  ' + Burger_1 + '</li>' +
    '<li> <b>Burger 2:</b>  ' + Burger_2 + '</li>' +
    '<li> <b>Burger 3:</b>  ' + Burger_3 + '</li>'
    
    // obtains the user input on star rating if they casted a valid vote
    if (userInput != 0){
        var starRating = prompt("How many stars would you give the burger you chose? (Rate from 1 to 5; 5 stars = It's the best burger in the world!");
        
        while (starRating != 1 && starRating != 2 && starRating != 3 && starRating != 4 && starRating != 5){
            starRating = prompt("Sorry, that is not a valid star rating. How many stars would you give the burger you chose? (Rate from 1 to 5; 5 stars = 'It's the best burger in the world!'");
        }
        for (var index = 0; index < starRating; index++){
            starOutput += stars;       
        }
    starOutput = '<h3> Your star rating </h3>' + starOutput
    }
    
    return [voteOutput, starOutput]
}