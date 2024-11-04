import { describe, it, expect } from 'vitest';

describe('Basic Test Suite', () => {
  it('should add numbers correctly', () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);
  });

  it('should subtract numbers correctly', () => {
    const difference = 5 - 3;
    expect(difference).toBe(2);
  });

  it('should multiply numbers correctly', () => {
    const product = 2 * 3;
    expect(product).toBe(6);
  });

  it('should divide numbers correctly', () => {
    const quotient = 10 / 2;
    expect(quotient).toBe(5);
  });
});