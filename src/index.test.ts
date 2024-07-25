import { readFileSync } from 'fs';
import { describe, expect, test } from '@jest/globals';
import { runWith } from './index';

function exampleTest(name: string) {
  const loadJson = (p: string) => JSON.parse(readFileSync(`${__dirname}/../examples/${name}/${p}`, 'utf8'));

  test(`handles walk through example "${name}"`, () => {
    const input = loadJson('input.json');
    const expected = loadJson('expected.json');

    expect(runWith(input)).toBe(expected);
  });
}

describe('Candidate robot', () => {
  test('returns true', () => {
    expect(true).toBe(true);
  });
  // exampleTest('01-walk-through');
  // exampleTest('02-error');
  // exampleTest('03-crash');
});
