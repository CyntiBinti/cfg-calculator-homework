let name = "";
let number;
let answer = 0;

function startCalculator() {
  do {
    name = prompt("Hello, what's your name?");
  } while (!name);
  alert("Welcome to my calculator game " + name + ". It's lovely to meet you!");
}

function addNumber() {
  alert("The calculator value is currently: " + answer);
  response = prompt("Clear the calculator? Enter 'y', else enter 'n'");
  if (response === "y") {
    return (answer = 0);
  } else if (response === "n") {
    number = parseInt(prompt("Enter a number to add"));
    answer += number;
    alert("The calculator value is now: " + answer);
  }
  return answer;
}

function subtractNumber() {
  alert("The calculator value is currently: " + answer);
  response = prompt("Clear the calculator? Enter 'y', else enter 'n'");
  if (response === "y") {
    return (answer = 0);
  } else if (response === "n") {
    number = parseInt(prompt("Enter a number to subtract"));
    answer -= number;
    alert("The calculator value is now: " + answer);
  }
  return answer;
}

function multiplyNumber() {
  alert("The calculator value is currently: " + answer);
  response = prompt("Clear the calculator? Enter 'y', else enter 'n'");
  if (response === "y") {
    return (answer = 0);
  } else if (response === "n") {
    number = parseInt(prompt("Enter a number to multiply by"));
    answer *= number;
    alert("The calculator value is now: " + answer);
  }
  return answer;
}

function divideNumber() {
  alert("The calculator value is currently: " + answer);
  response = prompt("Clear the calculator? Enter 'y', else enter 'n'");
  if (response === "y") {
    return (answer = 0);
  } else if (response === "n") {
    number = parseInt(prompt("Enter a number to divide by"));
    answer /= number;
    alert("The calculator value is now: " + answer);
  }
  return answer;
}

function clearCalculator() {
  answer = 0;
  alert("The calculator value is now: " + answer);
}