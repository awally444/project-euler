/*
  Javascript 101: Project Euler
  Name: Alex Wall
  Date Started: March 7, 2017
  Last Edit:
  Problem 1: Multiples of 3 and 5
    Find the sum of all the multiples of 3 and 5 below 1000.
*/

//initialize variables
var i;
var sum = 0;

//loop through all natural numbers from 1->1000
for (i = 1; i < 1000; i++){
  //check for multiples of 3 and 5
  if (i%3 === 0 || i%5 === 0){
    sum = sum + i;  //adding to current sum if number is a multiple
  }
}
