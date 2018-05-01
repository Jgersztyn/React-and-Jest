const functions = require('./jestTester');

//import jestTester from './src/helpers/jestTester';

test('Adds 2 + 2 equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 not equal to 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Check for falsy values
// includes null, undefined and 0

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// Use toEqual() to compare objects, arrays and more complex types

test('User should be Brad Bateman object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Bateman'
  });
});

test('Should be less than 9001', () => {
  const load1 = 7000;
  const load2 = 1800;
  expect(load1 + load2).toBeLessThan(9001);
});

// Regular expression

test('There is no I in that word', () =>{
    expect(functions.getString()).not.toMatch(/I/);
});