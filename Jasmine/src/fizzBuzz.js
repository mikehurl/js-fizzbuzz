function Fizzbuzz() {}

  isDivisibleByThree = function(number) { return isDivisibleBy(number,3); }

  isDivisiblebyFive = function(number) { return isDivisibleBy(number,5);}

  isDivisibleByThreeAndFive = function(number) { return isDivisibleBy(number,15); }

  isDivisibleBy = function(number, divisor) { return number % divisor === 0; }

  fizzbuzz = function(number) {
    if (isDivisibleByThree(number)) {
      return 'Fizz';
    } else {
      return 'Buzz';
    };
  }
