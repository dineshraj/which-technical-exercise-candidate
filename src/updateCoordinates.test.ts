import { describe, expect, test } from '@jest/globals';
import updateCoordinates from './updateCoordinates';
import { coords, heading } from './types';

// @TODO: Make generic testing function

describe('Update coordinates', () => {
  test('does not change coordinates when turning left', () => {
    const currentCoordinates: coords = [1, 4];

    const newCoordinates = updateCoordinates(currentCoordinates, 'left', 'east');
    expect(newCoordinates).toEqual(currentCoordinates);
  });

  test('does not change coordinates when turning right', () => {
    const currentCoordinates: coords = [1, 4];

    const newCoordinates = updateCoordinates(currentCoordinates, 'right', 'east');
    expect(newCoordinates).toEqual(currentCoordinates);
  });

  describe('direction is forward', () => {
    test('the heading is north', () => {
      const currentHeading: heading = 'north';
      const currentCoordinates: coords = [3, 1];
      const expectedCoordinates: coords = [3, 2];
      const newCoordinates = updateCoordinates(currentCoordinates, 'forward', currentHeading);

      expect(expectedCoordinates).toEqual(newCoordinates);
    });

    test('the heading is south', () => {
      const currentHeading: heading = 'south';
      const currentCoordinates: coords = [3, 0];
      const expectedCoordinates: coords = [3, -1];
      const newCoordinates = updateCoordinates(currentCoordinates, 'forward', currentHeading);

      expect(expectedCoordinates).toEqual(newCoordinates);
    });

    test('the heading is east', () => {
      const currentHeading: heading = 'east';
      const currentCoordinates: coords = [3, 0];
      const expectedCoordinates: coords = [4, 0];
      const newCoordinates = updateCoordinates(currentCoordinates, 'forward', currentHeading);

      expect(expectedCoordinates).toEqual(newCoordinates);
    });

    test('the heading is west', () => {
      const currentHeading: heading = 'west';
      const currentCoordinates: coords = [3, 4];
      const expectedCoordinates: coords = [2, 4];
      const newCoordinates = updateCoordinates(currentCoordinates, 'forward', currentHeading);

      expect(expectedCoordinates).toEqual(newCoordinates);
    });
  });
});
