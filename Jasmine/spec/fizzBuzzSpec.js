describe("fizzBuzz", function() {

  fizzBuzz = new fizzBuzz()

  it("knows if a number is divisible by 3", function() {
    expect(fizzBuzz.isDivisibleByThree(3)).toEqual (true);
  });

  it("knows if a number is not divisible by 3", function() {
    expect(fizzBuzz.isDivisibleByThree(4)).toEqual (false);
  });

  'new test here'
});
