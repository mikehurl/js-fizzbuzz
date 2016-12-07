function Fizzbuzz() {}

  isDivisibleByThree = function(number) { return isDivisibleBy(number,3); }

  isDivisiblebyFive = function(number) { return isDivisibleBy(number,5);}

  isDivisibleByThreeAndFive = function(number) { return isDivisibleBy(number,15); }

  isDivisibleBy = function(number, divisor) { return number % divisor === 0; }

  fizzbuzz = function(number) {
    if (isDivisibleByThreeAndFive(number)) {
      return 'FizzBuzz';
    } else if (isDivisibleByThree(number)) {
      return 'Fizz';
    } else if (isDivisiblebyFive(number)) {
      return 'Buzz';
    } else {
      return number;
    };
  }
