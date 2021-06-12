import { isComponent } from '../isComponent';

describe('isComponent Func', () => {
  test('it should return true if first letter of text is a capital', () => {
    expect(isComponent('Avatar')).toBeTruthy();
    expect(isComponent('avatar')).toBeFalsy();
  });
});
