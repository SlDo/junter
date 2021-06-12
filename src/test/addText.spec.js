import { addText } from '../junterDOM/addText';

describe('getFirstLetter Func', () => {
  test('it should return first letter of string', () => {
    const element = document.createElement('div');
    addText(element, 'Hello!');

    expect(element).toContainHTML('Hello!');
  });
});
