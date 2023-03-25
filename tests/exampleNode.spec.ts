// This import is not necessary-just for the linter
import { test } from 'vitest';

test('Running on node environment', () => {
  // Running on node environment
  expect(typeof window).toBe('undefined');
});
