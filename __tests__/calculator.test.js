import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  let age;
  let calc;

  beforeEach(() => {
    //Please enter your age in the line below.
    age = 24;
    calc = new Calculator(age);
  });

  test("Accurately calculates age in Mercury years.", () => {
    expect(calc.mercury(age)).toEqual(.24 / age);
  })

  test("Accurately calculates age in Venus years.", () => {
    expect(calc.venus(age)).toEqual(.64 / age);
  })
});