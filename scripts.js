var numberA = parseFloat(prompt( "Please enter number A: "));
var operator = prompt( "Please enter an operator (+, -, *, /): ");
var numberB = parseFloat(prompt( "Please enter number B: "));
if (operator == "+") {
   alert("Result is: " + (numberA + numberB));

} else if (operator == "-") {

    alert("Result is: " + (numberA - numberB));

} else if (operator == "*") {

    alert("Result is: " + (numberA * NumberB));

} else if (operator == "/") {

    alert("Result is: " + (numberA / numberB));

} else {

    alert("The values entered are incorrect!")
}