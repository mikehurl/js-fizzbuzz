
describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function(){
      fizzbuzz = new Fizzbuzz()
  });

  it("knows if a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual (true);
  });

  it("knows if a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(4)).toEqual (false);
  });

  it("knows if a number is divisible by 5", function() {
    expect(fizzbuzz.isDivisiblebyFive(5)).toEqual (true);
  });

  it("knows if a number is not divisible by 5", function() {
    expect(fizzbuzz.isDivisiblebyFive(6)).toEqual (false);
  });

  it("knows if a number is divisible by both 3 and 5", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toEqual (true);
  });

  it("knows if a number is not divisible by 3 or 5", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(16)).toEqual (false);
  });

  it("returns 'Fizz' when passed a number that is divisible by 3", function() {
    expect(fizzbuzz.game(3)).toEqual ('Fizz');
  });
  //
  it("returns 'Buzz' when passed a number that is divisible by 5", function() {
    expect(fizzbuzz.game(5)).toEqual ('Buzz');
  });

  it("returns 'FizzBuzz' when passed a number that is divisible by 3 and 5", function() {
    expect(fizzbuzz.game(15)).toEqual ('FizzBuzz');
  });

  it("returns the same number when passed a number that is not divisible by 3, 5 or 15", function() {
    expect(fizzbuzz.game(7)).toEqual (7);
  });


});
