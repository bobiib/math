export function gcdBruteForce(a: number, b: number): number {
  const min = Math.min(a, b);

  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }

  return 1;
}

export function gcdEuclid(a: number, b: number): number {
  if (a === b) {
    return a;
  }

  if (a > b) {
    return gcdEuclid(a - b, b);
  }

  return gcdEuclid(a, b - a);
}