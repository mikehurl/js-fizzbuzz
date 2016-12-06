describe("Fizzbuzz", function() {

  it("knows when a number is divisible by 3", function() {
    expect(isDivisibleByThree(3)).toEqual (true);
  });

  it("Knows when a number is not divisible by 3", function() {
    expect(isDivisibleByThree(5)).toEqual (false);
  });

  it("knows when a number is divisible by 5", function() {
    expect(isDivisibleByFive(5)).toEqual (true);
  });

  it("Know when a number is not divisible by 5", function() {
    expect(isDivisibleByFive(6)).toEqual (false);

  })

  it("knows when a number is divisible by both 3 and 5", function() {
    expect(isDivisibleByThreeAndFive(15)).toEqual (true);
  })

  it("Knows when a number is not divisible by both 3 and 5", function() {
    expect(isDivisibleByThreeAndFive(12)).toEqual (false);
  })

  it("should know when one number can be divided by another", function() {
    expect(isDivisibleBy(3, 3)).toEqual (true);
  })

  it("should know when a number cannot be divided by another number", function() {
    expect(isDivisibleBy(5,3)).toEqual (false);

  })

  it("should return 'fizz' when passed a number divisible only by 3", function() {
    expect(fizzbuzz(3)).toEqual ('fizz')
  })

  it("should return 'buzz' when passed a number divisible only by 5", function() {
    expect(fizzbuzz(5)).toEqual ('buzz')
    })

  it("should return 'fizzbuzz' when passed a number divisible by both 3 and 5", function() {
    expect(fizzbuzz(15)).toEqual ('fizzbuzz')
  })

});
