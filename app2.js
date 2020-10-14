var user_vote = prompt("Please vote: Type '1' for Burger 1, Type '2' for Burger 2, and Type '3' for Burger 3. Type '0' to abstain.");

var Burger_1 = 0;
var Burger_2 = 0;
var Burger_3 = 0;

if (user_vote == 0) {
    alert('Have a nice day!');
} else if (user_vote == 1) {
    Burger_1 = Burger_1 + 1;
} else if (user_vote == 2) {
    Burger_2 = Burger_2 + 1;
} else if (user_vote == 3) {
    Burger_3 = Burger_3 + 1;
} else {
    user_vote = prompt("Please enter a valid option: 1, 2, or 3. If you wish not to vote, type 0");
}

document.write(
    '<li> <b>Burger 1:</b>  ' + Burger_1 + '</li>' +
    '<li> <b>Burger 2:</b>  ' + Burger_2 + '</li>' +
    '<li> <b>Burger 3:</b>  ' + Burger_3 + '</li>'
)