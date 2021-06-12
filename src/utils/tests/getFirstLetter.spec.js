import { getFirstLetter } from '../getFirstLetter';

describe('getFirstLetter Func', () => {
  test('it should return first letter of string', () => {
    expect(getFirstLetter('Avatar')).toBe('A');
    expect(getFirstLetter('avatar')).toBe('a');
  });
});
