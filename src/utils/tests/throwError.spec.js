import { throwError } from '../throwError';

describe('throwError Func', () => {
  test('it should throw error if condition is true', () => {
    try {
      throwError(true, 'Test error');
    } catch (e) {
      expect(e.message).toBe('Test error');
    }
  });
});
