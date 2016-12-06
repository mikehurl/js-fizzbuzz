function Fizzbuzz() {}


isDivisibleByThree = function(number) { return isDivisibleBy(number,3); }

isDivisibleByFive = function(number) { return isDivisibleBy(number,5); }

isDivisibleByThreeAndFive = function(number) { return isDivisibleBy(number,15); }

isDivisibleBy = function(number, divisor) { return number % divisor == 0; }

fizzbuzz = function(number) {
  if (isDivisibleByThreeAndFive(number)) {
     return 'fizzbuzz'
  } else if (isDivisibleByThree(number)) {
     return 'fizz'
  } else {
     return 'buzz'
  }
  ; }
