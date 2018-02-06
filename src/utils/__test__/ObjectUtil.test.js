import { callValue } from '../ObjectUtil';

it('object throw error', () => {
  expect(
    callValue(() => {
      throw new Error('');
    }, 0),
  ).toBe(0);
});

it('object normal', () => {
  expect(callValue(() => 1, 0)).toBe(1);
});
