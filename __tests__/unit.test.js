// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


test('for strong passwords', () => {
  expect(isStrongPassword('anusha')).toBe(true); // standard password
  expect(isStrongPassword('8anusha')).toBe(false); // password start with a num
  expect(isStrongPassword('CSE110iskindafun')).toBe(false); // password is more than 15 chars
  expect(isStrongPassword('Dhruv_20')).toBe(true); // testing with underscore and underscore
});

test('for if it is a valid date', () =>{
  expect(isDate('20/04/2005')).toBe(true); // standard date format
  expect(isDate('20/04/200')).toBe(false); // YYYY is length 3 instead of 4
  expect(isDate('/04/2005')).toBe(false); // XX is empty
  expect(isDate('04/20/2005')).toBe(true); // american format
});


test('for if it is a valid hex code', () =>{
  expect(isHexColor('6C291A')).toBe(true); // standard format
  expect(isHexColor('6C291')).toBe(false); // not 3 or 6 length
  expect(isHexColor('0C0D6D')).toBe(true); // blue color
  expect(isHexColor('')).toBe(false); // no hex code
});

test('for if it is a valid email', () =>{
  expect(isEmail('dhruv@ucsd.edu')).toBe(true); // standard format
  expect(isEmail('d6agarwal.edu')).toBe(false); // missing @ part
  expect(isEmail('anushadang@gmail.c')).toBe(false); // only has 1 char after .
  expect(isEmail('dhruv@stanford.edu')).toBe(true); // stanford email id
});

test('for if it is a valid phone number', () =>{
  expect(isPhoneNumber('858-752-4009')).toBe(true); // my phone number 
  expect(isPhoneNumber('858-752-400')).toBe(false); // missing 1 int
  expect(isPhoneNumber('858-75-4009')).toBe(false); // missing 1 int in the middle
  expect(isPhoneNumber('981-073-8270')).toBe(true); // second number
});