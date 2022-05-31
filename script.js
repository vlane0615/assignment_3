/*Vanessa Lane
MET CS 601 Web Development
Assignment 3
This program prompts the user for integer input, sums the input,
and then returns the sum. There are other functions for input and printing the 
result that supplement the main purpose of the program.*/
//Welcome the user with an alert
alert("Welcome to this program!");

//Promptsthevisitorforhis/hername
let user = prompt("Please enter your name.");

/*Displaystheusersnamewithanalert
a. Suchas“Welcome[name]!”*/
alert("Welcome," + user);





// test: alert(numberOne + numberTwo);

//input
while (true) {
    //print result 
    function printResult(sum) {
        alert("The sum of your two numbers is: " + sum + ".");
        if (sum > 10) {
            alert("That is a big number!");
        }
        else {
            alert("That is a small number!");

        }
    }

    function add(numberOne, numberTwo) {
        // test alert("Here.");
        var sum = numberOne + numberTwo;
        //test alert("Here.");
        return sum;
        // test printResult(sum);

    }
    function input() {
        //Ask the visitor to enter two numbers
        while (true) {
            var numberOne;
            var numberTwo;
            let userNumbers = prompt(user + ", " + "Please enter two numbers separated by a comma.");
            let numArray = userNumbers.split(",");
            let userNumbersArr = [...userNumbers];
            //Test alert(numArray);
            numberOne = parseInt(numArray[0]);
            numberTwo = parseInt(numArray[1]);
            // test alert(numberOne);
            // test alert(numberTwo);
            if (isNaN(numberOne) || isNaN(numberTwo)) {
                alert("Please enter your numbers again. There seems to be a typo.");
            }
            else {
                break;
            }
        }
        return [numberOne, numberTwo];
    }

    // Displays sum, prompts user to try again if they'd like.  
    var sumArray = input();
    var sum = add(sumArray[0], sumArray[1]);
    printResult(sum);
    userRepeat = prompt("Would you like to enter two numbers again? Type yes or no.");
    while (userRepeat != "no" && userRepeat != "yes") {
        userRepeat = prompt("There seems to be a typo. Enter your response again.");
    }
    if (userRepeat == "no") {
        alert("Thank you for using this program.");
        break;
    }

}



