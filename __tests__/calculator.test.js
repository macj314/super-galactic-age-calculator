import { Calculator } from '../src/calculator';

describe('Planet Age Calculation', () => {
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

  test("Accurately calculates age in Jupiter years.", () => {
    expect(calc.jupiter(age)).toEqual(2);
  })
});

describe('Life Expectation Calculations', () =>{
  let age;
  let calc;
  let lifestyle;
  let healthCare;
  let activity;
  beforeEach(() =>{
    age = 24;
    calc = new Calculator(age);
    lifestyle = 1;
    healthCare = 1;
    activity = 1;
  })
  test("Accurately calculates life expectancy in Earth years.", () => {
    expect(calc.lifeExpectancy(lifestyle, healthCare, activity)).toEqual(1);
  })
})