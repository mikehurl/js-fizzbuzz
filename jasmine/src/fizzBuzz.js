function Fizzbuzz() {}


Fizzbuzz.prototype.isDivisibleByThree = function(number) { return number % 3 == 0; }

Fizzbuzz.prototype.isDivisibleByFive = function(number) { return number % 5 == 0; }

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) { return number % 15 == 0; }

Fizzbuzz.prototype.isDivisibleBy = function(number, divisor) { return true; }
