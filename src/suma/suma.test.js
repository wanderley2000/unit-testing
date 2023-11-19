const suma = require("./suma");

test("10 + 20 should be 30", () => {
  // sujeto de prueba
  const result = suma(10, 20);
  // test
  expect(result).toBe(30);
});

test("Si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = suma("10", "20");
  expect(result).toBe(err);
});

test("2.5 + 2.5 should be 5", () => {
  const result = suma(2.5, 2.5);

  expect(result).toBe(5);
});