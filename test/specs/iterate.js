/* 

testing iterating through functions

Realised this is not what the external excercise wants me to do during development but interesting anyway

This should be done using $$, which is quite challenging as it's new to me, 

Mostly I use functions as I find this to be easier


*/


const { navigateToTradingAccountPage } = require('./tracAccAsAFunction');

// Define the functions you want to execute in an array
const functionsArray = [navigateToTradingAccountPage];

// Loop through the array and execute each function
for (let i = 0; i < functionsArray.length; i++) {
  functionsArray[i]();

}


