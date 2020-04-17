import { Calculator } from '../src/calculator';
import $ from 'jquery';

describe('', () => {
  let age = $("#input-age");

  beforeEach(() => {
    calc = new Calculator();
  });

  test("Accurately calculates age in Mercury years.", () => {
    expect(calc.mercury(age).toEqual(.24 / age));
  })
});
