function fizzBuzz() {

  fizzBuzz.prototype.isDivisibleByThree = function(number) { return number % 3 === 0; }
  fizzBuzz.prototype.isDivisiblebyFive = function(number) { return number % 5 === 0; }
  fizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) { return number % 15 === 0; }

}
