import { readFileSync } from 'fs';
import { describe, expect, test } from '@jest/globals';
import { runWith } from './index';

function endtoEndTest(name: string) {
  const loadJson = (p: string) => JSON.parse(readFileSync(`${__dirname}/../examples/${name}/${p}`, 'utf8'));

  test(`handles walk through example "${name}"`, () => {
    const input = loadJson('input.json');
    const expected = loadJson('expected.json');

    expect(runWith(input)).toStrictEqual(expected);
  });
}

describe('Pie-pot the robot', () => {
  endtoEndTest('01-walk-through');
  endtoEndTest('02-error');
  endtoEndTest('03-crash');
});
