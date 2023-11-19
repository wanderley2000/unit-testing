const resta= require("./resta");

test("100 - 20 - 20 should be 60", () => {
  const result = resta(100, 20, 20);
  expect(result).toBe(60);
});

test("10 - 2 - 2 should be 6",() => {
    const result = resta(10, 2, 2);
    expect(result).toBe(6);
});

test("3 - 2.5 - 2.5 should be -2", () => {
    const result = resta(3, 2.5, 2.5);
    expect(result).toBe(-2);
});