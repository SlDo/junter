import { isElementTag } from '../isElementTag';

describe('isElementTag Func', () => {
  const element = document.createElement('style');

  test('it should return true if second paramets is a tag of element (first argument)', () => {
    expect(isElementTag(element, 'style')).toBeTruthy();
    expect(isElementTag(element, 'div')).toBeFalsy();
  });
});
