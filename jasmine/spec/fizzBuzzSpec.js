describe("Fizzbuzz", function() {

  fizzbuzz = new Fizzbuzz()

  it("knows when a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual (true);
  });

  it("Knows when a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(5)).toEqual (false);
  });

});
