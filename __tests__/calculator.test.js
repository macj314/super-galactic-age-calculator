import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  let age;
  let calc;

  beforeEach(() => {
    age = 24;
    calc = new Calculator(age);
  });

  test("Accurately calculates age in Mercury years.", () => {
    expect(calc.mercury(age)).toEqual(100);
  })

  test("Accurately calculates age in Venus years.", () => {
    expect(calc.venus(age)).toEqual(37.5);
  })

  test("Accurately calculates age in Mars years.", () => {
    expect(calc.mars(age)).toEqual(12.8);
  })
});