import { aliasName } from '../getAliasName';

describe('getAliasName Func', () => {
  test('it should return name of alias', () => {
    expect(aliasName('slot:avatar')).toBe('slot');
    expect(aliasName()).toBe(null);
  });
});
