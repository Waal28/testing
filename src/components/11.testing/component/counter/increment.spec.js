const { increment } = require("./increment");

describe("src/components/counter/increment.js", () => {
  describe(".increment()", () => {});
  it("should return parameter + 1 when parameter passed", () => {
    const result = increment(0);
    expect(result).toEqual(1);
  });
  it("should return 10 when parameter is 10", () => {
    const result = increment(100);
    expect(result).toEqual(100);
  });
  it("should throws error when parameter is not defined", () => {
    expect(() => increment()).toThrow("value must be defined");
  });
});
