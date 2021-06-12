import { addStyles } from '../junterDOM/addStyles';

describe('addStyles Func', () => {
  test('it should add styles to component', () => {
    const element = document.createElement('style');
    addStyles(element, '.outer { color: red }');

    expect(element).toContainHTML('.outer { color: red }');
  });

  test('it should return undefined', () => {
    const element = document.createElement('div');
    addStyles(element, '.outer { color: red }');

    expect(element).toContainHTML('');
  });
});
