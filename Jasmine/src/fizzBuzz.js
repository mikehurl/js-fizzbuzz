function fizzBuzz() {

  fizzBuzz.prototype.isDivisibleByThree = function(number) { return this.isDivisibleBy(number,3); }
  fizzBuzz.prototype.isDivisiblebyFive = function(number) { return this.isDivisibleBy(number,5);}
  fizzBuzz.prototype.isDivisibleByThreeAndFive = function(number) { return this.isDivisibleBy(number,15); }
  fizzBuzz.prototype.isDivisibleBy = function(number, divisor) { return number % divisor === 0; }

}
