import { readFileSync } from 'fs';
import { describe, expect, test } from '@jest/globals';
import { runWith, updateHeading } from './index';

function exampleTest(name: string) {
  const loadJson = (p: string) => JSON.parse(readFileSync(`${__dirname}/../examples/${name}/${p}`, 'utf8'));

  test(`handles walk through example "${name}"`, () => {
    const input = loadJson('input.json');
    const expected = loadJson('expected.json');

    expect(runWith(input)).toBe(expected);
  });
}

describe('Candidate robot', () => {
  describe('Update heading', () => {
    test('returns the same heading if the path is "forwards"', () => {
      const currentHeading = 'west';
      const nextMovement = 'forward';
      const newHeading = updateHeading(currentHeading, nextMovement);

      expect(newHeading).toBe(currentHeading);
    });

    describe('the next movement is left', () => {
      const nextMovement = 'left';

      test('returns west if the current heading is north', () => {
        const currentHeading = 'north';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('west');
      });

      test('returns south if the current heading is west', () => {
        const currentHeading = 'west';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('south');
      });

      test('returns east if the current heading is south', () => {
        const currentHeading = 'west';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('south');
      });

      test('returns north if the current heading is east', () => {
        const currentHeading = 'west';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('south');
      });
    });

    describe('the next movement is right', () => {
      const nextMovement = 'right';

      test('returns east if the current heading is north', () => {
        const currentHeading = 'north';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('east');
      });

      test('returns south if the current heading is east', () => {
        const currentHeading = 'east';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('south');
      });

      test('returns west if the current heading is south', () => {
        const currentHeading = 'south';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('west');
      });

      test('returns north if the current heading is west', () => {
        const currentHeading = 'west';
        const newHeading = updateHeading(currentHeading, nextMovement);

        expect(newHeading).toBe('north');
      });
    });
  });

  // exampleTest('01-walk-through');
  // exampleTest('02-error');
  // exampleTest('03-crash');
});
