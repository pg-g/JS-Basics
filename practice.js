//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//1. Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
  //Code Here
var isTyler = function(name) {
  if (name == 'Tyler') {
    return true;
  } else {
    return false;
  }
};
isTyler(name);


//2. Next problem
//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
  //Code Here
var getName = function() {
  var name = prompt("What's your name?");
  return name;
};
getName();


//3. Next Problem
//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
  //Code Here
var welcome = function() {
  var name = getName();
  return "Welcome, " + name;
};
welcome();


//4. Next problem
//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.
  //Code Here
var adder = function() {
  var theTotal = 0;
  for (var i = 0; i < arguments.length; i++) {
    theTotal = theTotal + arguments[i];
  }
  return "The total number was " + theTotal;
};
adder(1, 2, 3);


//5. Next Problem
//What is the difference between arguments and parameters?
  //Answer Here
Parameters are set up in the function definition, behave like local variables
Arguments are passed into the function when the function is invoked


//6. Next problem
//What are all the falsy values in JavaScript and how do you check if something is falsy?
  //Answer Here
falsy is undefined, null, 0, '', NaN, none
!!! check if something is falsy by 


//7. Next Problem
//Create a function called myName that returns your name
  //Code Here
var myName = function() {
  return "Paige";
};

//Now save the function definition of myName into a new variable called newMyName
  //Code Here
newMyName = myName;

//Now alert the result of invoking newMyName
newMyName();



//8. Next problem
//Create a function called outerFn which returns an anonymous function which returns your name.
  //Code Here
var outerFn = function() {
  function() {
    return "Paige";
  }
};
//Now save the result of invoking outerFn into a variable called innerFn.
  //Code Here


//Now invoke innerFn.





