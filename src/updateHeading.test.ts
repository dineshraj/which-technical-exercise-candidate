import { describe, expect, test } from '@jest/globals';
import updateHeading from './updateHeading';
import { Heading, Direction } from './types';

// @TODO: Make generic testing function)
const checkHeading = (currentHeading: Heading, nextMovement: Direction, expectedHeading: Heading) => {
  const newHeading = updateHeading(currentHeading, nextMovement);
  expect(newHeading).toBe(expectedHeading);
};

describe('Update heading', () => {
  test('returns the same heading if the path is "forwards"', () => {
    checkHeading('west', 'forward', 'west');
  });

  describe('the next movement is left', () => {
    const nextMovement = 'left';

    test('returns west if the current heading is north', () => {
      checkHeading('north', nextMovement, 'west');
    });

    test('returns south if the current heading is west', () => {
      checkHeading('west', nextMovement, 'south');
    });

    test('returns east if the current heading is south', () => {
      checkHeading('south', nextMovement, 'east');
    });

    test('returns north if the current heading is east', () => {
      checkHeading('east', nextMovement, 'north');
    });
  });

  describe('the next movement is right', () => {
    const nextMovement = 'right';

    test('returns east if the current heading is north', () => {
      checkHeading('north', nextMovement, 'east');
    });

    test('returns south if the current heading is east', () => {
      checkHeading('east', nextMovement, 'south');
    });

    test('returns west if the current heading is south', () => {
      checkHeading('south', nextMovement, 'west');
    });

    test('returns north if the current heading is west', () => {
      checkHeading('west', nextMovement, 'north');
    });
  });
});
