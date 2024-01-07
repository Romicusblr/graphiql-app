import { prettifyJson } from './prettyfier';

describe('prettifyJson function', () => {
  const testCases: [object, string][] = [
    [{}, '{}'],
    [{ key: 'value' }, '{\n  "key": "value"\n}'],
    [{ array: [1, 2, 3] }, '{\n  "array": [\n    1,\n    2,\n    3\n  ]\n}'],
  ];

  test.each(testCases)(
    'given %o as input, returns %s',
    (input: object, expectedOutput: string) => {
      const output = prettifyJson(input);
      expect(output).toBe(expectedOutput);
    }
  );
});
