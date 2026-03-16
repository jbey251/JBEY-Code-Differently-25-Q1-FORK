export class ExpressionCalculator {
  /** Returns a calculation involving a, b, c, d, and e */
  calculate(a: number, b: number, c: number, d: number, e: number): number {
    // Implement your code here to return the correct value.
    const product = this.multiply(a, b);    // a * b
    const sum = this.add(c, d);             // c + d
    const powered = this.pow(sum, e);       // (c + d)^e
    return this.divide(product, powered);   // (a * b) / (c + d)^e
  }

  add(x: number, y: number): number {
    return x + y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    return x / y;
  }

  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}