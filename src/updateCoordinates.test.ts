import { describe, expect, test } from '@jest/globals';
import updateCoordinates from './updateCoordinates';
import { Coords, Heading, Direction, Status, Arena } from './types';

const checkMovement = (
  currentCoordinates: Coords,
  expectedCoordinates: Coords,
  status: Status,
  direction: Direction,
  heading: Heading,
  arena: Arena
) => {
  const [newCoordinates, newStatus] = updateCoordinates(currentCoordinates, direction, heading, arena);

  expect(expectedCoordinates).toEqual(newCoordinates);
  expect(newStatus).toBe(status);
};

describe('Update coordinates', () => {
  const arena = {
    corner1: {
      x: -5,
      y: -5,
    },
    corner2: {
      x: 5,
      y: 5,
    },
  };
  describe('valid paths', () => {
    describe('no movement', () => {
      test('does not change coordinates when turning left', () => {
        const currentCoordinates: Coords = [1, 4];
        const newCoordinates = updateCoordinates(currentCoordinates, 'left', 'east', arena);
        expect(newCoordinates).toEqual(currentCoordinates);
      });

      test('does not change coordinates when turning right', () => {
        const currentCoordinates: Coords = [1, 4];
        const newCoordinates = updateCoordinates(currentCoordinates, 'right', 'east', arena);
        expect(newCoordinates).toEqual(currentCoordinates);
      });
    });

    describe('direction is forward', () => {
      const direction = 'forward';

      describe('valid movements', () => {
        test('the heading is north', () => {
          checkMovement([3, 1], [3, 2], 'ok', direction, 'north', arena);
        });

        test('the heading is south', () => {
          checkMovement([3, 0], [3, -1], 'ok', direction, 'south', arena);
        });

        test('the heading is east', () => {
          checkMovement([3, 0], [4, 0], 'ok', direction, 'east', arena);
        });

        test('the heading is west', () => {
          checkMovement([3, 4], [2, 4], 'ok', direction, 'west', arena);
        });
      });

      describe('boundary crash detection', () => {
        const arena = {
          corner1: {
            x: -3,
            y: -3,
          },
          corner2: {
            x: 3,
            y: 3,
          },
        };
        test('the heading is north', () => {
          checkMovement([2, 3], [2, 3], 'crash', direction, 'north', arena);
        });

        test('the heading is south', () => {
          checkMovement([2, -3], [2, -3], 'crash', direction, 'south', arena);
        });

        test('the heading is east', () => {
          checkMovement([3, -3], [3, -3], 'crash', direction, 'east', arena);
        });

        test('the heading is west', () => {
          checkMovement([-3, 0], [-3, 0], 'crash', direction, 'west', arena);
        });
      });
    });
  });
});
