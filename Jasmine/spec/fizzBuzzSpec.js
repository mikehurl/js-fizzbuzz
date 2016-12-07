describe("fizzBuzz", function() {

  fizzBuzz = new fizzBuzz()

  it("knows if a number is divisible by 3", function() {
    expect(fizzBuzz.isDivisibleByThree(3)).toEqual (true);
  });

  it("knows if a number is not divisible by 3", function() {
    expect(fizzBuzz.isDivisibleByThree(4)).toEqual (false);
  });

  it("knows if a number is divisible by 5", function() {
    expect(fizzBuzz.isDivisiblebyFive(5)).toEqual (true);
  });

  it("knows if a number is not divisible by 5", function() {
    expect(fizzBuzz.isDivisiblebyFive(6)).toEqual (false);
  });

  it("knows if a number is divisible by both 3 and 5", function() {
    expect(fizzBuzz.isDivisibleByThreeAndFive(15)).toEqual (true);
  });

  it("knows if a number is not divisible by 3 or 5", function() {
    expect(fizzBuzz.isDivisibleByThreeAndFive(16)).toEqual (false);
  });

  it("knows if a number is divisible by another number", function() {
    expect(fizzBuzz.isDivisibleBy(3, 3)).toEqual (true);
  });

  it("knows if a number is not divisible by another number", function() {
    expect(fizzBuzz.isDivisibleBy(4, 3)).toEqual (false);
  });

});
