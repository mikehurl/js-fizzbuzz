console.log('this file has been required');

function Fizzbuzz() {}

  Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisibleBy(number,3);
  };

  Fizzbuzz.prototype.isDivisiblebyFive = function(number) {
    return this._isDivisibleBy(number,5);}

  Fizzbuzz.prototype.isDivisibleByThreeAndFive = function(number) {
    return this._isDivisibleBy(number,15); }

  Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
    return number % divisor === 0;
  };


  Fizzbuzz.prototype.game = function(number) {
    if (this.isDivisibleByThreeAndFive(number)) {
      return 'FizzBuzz';
    } else if (this.isDivisibleByThree(number)) {
      return 'Fizz';
    } else if (this.isDivisiblebyFive(number)) {
      return 'Buzz';
    } else {
      return number;
    };
  };
