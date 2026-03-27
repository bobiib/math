import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("Point2D distance to another point", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);
  assertEquals(p1.distanceTo(p2), 5);
});

Deno.test("Circle area with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);
  assertAlmostEquals(circle.area(), 78.539, 0.01);
});

Deno.test("Circle diameter with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);
  assertEquals(circle.diameter(), 10);
});

Deno.test("Rectangle circumference", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.circumference(), 14); // width 4, height 3 -> 2*(4+3) = 14
});

Deno.test("Rectangle area", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.area(), 12);
});

Deno.test("Rectangle diagonal", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));
  assertEquals(rect.diagonal(), 5);
});
