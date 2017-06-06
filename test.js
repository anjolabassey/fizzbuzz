 <script src="src/convert.js"><>/script>
<script src="spec/convertSpec.js"></script>

 <script src="src/convert.js"><>/script>
<script src="spec/convertSpec.js"></script>

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

});

describe("Case for neither arithmetic nor geometric sequence", function() {

  it("should return -1 for [1, 2, 3, 5, 8]", function() {
    expect(aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
  });

  it("should return -1 for [1, 3, 6, 10, 15]", function() {
    expect(aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
  });

  it("should return -1 for [1, 8, 27, 64, 125]", function() {
    expect(aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
  });
      
});
});
