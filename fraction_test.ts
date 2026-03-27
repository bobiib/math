import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("fraction with zero denominator throws", () => {
  assertThrows(() => new Fraction(1, 0), Error, "denominator cannot be 0");
});

Deno.test("subtraction: 1/2 - 1/4 = 1/4 (0.25)", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);
  left.subtract(right);
  assertEquals(left.toFloat(0.01), 0.25);
});

Deno.test("multiplication: 1/2 * 1/4 = 1/8 (0.125)", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);
  left.multiply(right);
  assertEquals(left.toFloat(0.001), 0.125);
});

Deno.test("division: 1/2 / 1/4 = 2", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);
  left.divide(right);
  assertEquals(left.toFloat(0.1), 2.0);
});

Deno.test("toString: formats as numerator/denominator", () => {
  const f = new Fraction(3, 4);
  assertEquals(f.toString(), "3/4");
});

Deno.test("parse: valid expression", () => {
  const f = Fraction.parse("3 / 4");
  assertEquals(f.toString(), "3/4");
});

Deno.test("parse: incorrect format throws", () => {
  assertThrows(() => Fraction.parse("3"), Error, `illegal syntax: "[numerator]/[denominator]" required`);
});

Deno.test("parse: non-numeric parts throw", () => {
  assertThrows(() => Fraction.parse("a / 4"), Error, "non-numeric numerator/denominator");
});
