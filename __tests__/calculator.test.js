import { Calculator } from '../src/calculator';

describe('Planet Age Calculation Tests', () => {
  let age;
  let calc;
  beforeEach(() => {
    age = 24;
    calc = new Calculator();
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

  describe('Life Expectancy Tests', () => {
    let lifestyle;
    let healthCare;
    let activity;
    const expected = [expect.stringMatching(/Cong/)];
    beforeEach(() => {
      lifestyle = 4;
      healthCare = 4;
      activity = 4;
    });

  test("Accurately calculates life expectancy in Earth years.", () => {
    expect(calc.lifeExpectancyEarth(lifestyle, healthCare, activity)).toEqual(6);
  })

  test("Accurately calculates life expectancy on all planets in years.", () => {
    expect(calc.lifeExpectancy(lifestyle, healthCare, activity)).toEqual([25, 9.4, 6, 3.2, .5]);
  })

  test("Should display years lived past life expectancy.", () => {
    let array = calc.lifeExpectancy(lifestyle, healthCare, activity);
    expect(calc.pastExpectancy(array, age)).toEqual(
      expect.arrayContaining(expected),
    );
  })
  });
});
