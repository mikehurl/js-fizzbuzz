function Fizzbuzz() {}


Fizzbuzz.prototype.isDivisibleByThree = function(number) { return this.isDivisibleBy(number,3); }

Fizzbuzz.prototype.isDivisibleByFive = function(number) { return this.isDivisibleBy(number,5); }

Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) { return this.isDivisibleBy(number,15); }

Fizzbuzz.prototype.isDivisibleBy = function(number, divisor) { return number % divisor == 0; }
