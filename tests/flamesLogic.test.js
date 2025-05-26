import { getFlamesResult } from '../src/flamesLogic.js';

test('Rahul and Priya should be Love', () => {
  expect(getFlamesResult('Rahul', 'Priya')).toBe('Love');
});

test('Alex and Sam should be Friends', () => {
  expect(getFlamesResult('Alex', 'Sam')).toBe('Friends');
});