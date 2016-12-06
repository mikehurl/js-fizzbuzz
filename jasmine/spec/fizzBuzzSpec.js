describe("Fizzbuzz", function() {

  fizzbuzz = new Fizzbuzz()

  it("knows when a number is divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(3)).toEqual (true);
  });

  it("Knows when a number is not divisible by 3", function() {
    expect(fizzbuzz.isDivisibleByThree(5)).toEqual (false);
  });

  it("knows when a number is divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(5)).toEqual (true);
  });

  it("Know when a number is not divisible by 5", function() {
    expect(fizzbuzz.isDivisibleByFive(6)).toEqual (false);

  })

  it("knows when a number is divisible by both 3 and 5", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toEqual (true);
  })

  it("Knows when a number is not divisible by both 3 and 5", function() {
    expect(fizzbuzz.isDivisibleByThreeAndFive(12)).toEqual (false);
  })

  it("should know when one number can be divided by another", function() {
    expect(fizzbuzz.isDivisibleBy(3, 3)).toEqual (true);
  })

});
