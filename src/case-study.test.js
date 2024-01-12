import { addStrings } from './case-study';

describe('addStrings', () => {
  it('should return "Input must be strings." when type of param num1 is not a "string"', () => {
    const num1 = 1;
    const num2 = '1';

    const result = addStrings(num1, num2);

    expect(result).toBe('Input must be strings.');
  });

  it('should return "Input must be strings." when type of param num2 is not a "string"', () => {
    const num1 = '1';
    const num2 = 1;

    const result = addStrings(num1, num2);

    expect(result).toBe('Input must be strings.');
  });

  it('should return "Input must be a valid number format." when value of param num1 is invalid number format', () => {
    const num1 = 'asd123';
    const num2 = '1';

    const result = addStrings(num1, num2);

    expect(result).toBe('Input must be a valid number format.');
  });

  it('should return "Input must be a valid number format." when value of param num2 is invalid number format', () => {
    const num1 = '1';
    const num2 = '123asd';

    const result = addStrings(num1, num2);

    expect(result).toBe('Input must be a valid number format.');
  });

  it('should return "3" when num1 is "1" and num2 is "2"', () => {
    const num1 = '1';
    const num2 = '2';

    const result = addStrings(num1, num2);

    expect(result).toBe('3');
  });

  it('should return "3.5" when num1 is "1.2" and num2 is "2.3"', () => {
    const num1 = '1.2';
    const num2 = '2.3';

    const result = addStrings(num1, num2);

    expect(result).toBe('3.5');
  });
});
