import { describe, expect, test } from '@jest/globals';
import updateCoordinates from './updateCoordinates';
import { Coords, Heading, Direction, Status, Arena } from '../types';

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

describe('Update coordinates', () => {
  describe('valid paths', () => {
    describe('no movement', () => {
      test('does not change coordinates when turning left', () => {
        const currentCoordinates: Coords = { x: 1, y: 4 };
        const newCoordinates = updateCoordinates(currentCoordinates, 'left', 'east', arena);
        expect(newCoordinates).toEqual([currentCoordinates, 'ok']);
      });

      test('does not change coordinates when turning right', () => {
        const currentCoordinates: Coords = { x: 1, y: 4 };
        const newCoordinates = updateCoordinates(currentCoordinates, 'right', 'east', arena);
        expect(newCoordinates).toEqual([currentCoordinates, 'ok']);
      });
    });

    describe('direction is forward', () => {
      const direction = 'forward';

      describe('valid movements', () => {
        test('the heading is north', () => {
          checkMovement({ x: 3, y: 1 }, { x: 3, y: 2 }, 'ok', direction, 'north', arena);
        });

        test('the heading is south', () => {
          checkMovement({ x: 3, y: 0 }, { x: 3, y: -1 }, 'ok', direction, 'south', arena);
        });

        test('the heading is east', () => {
          checkMovement({ x: 2, y: -3 }, { x: 3, y: -3 }, 'ok', direction, 'east', arena);
        });

        test('the heading is west', () => {
          checkMovement({ x: 3, y: 4 }, { x: 2, y: 4 }, 'ok', direction, 'west', arena);
        });
      });

      describe('boundary crash detection', () => {
        test('the heading is north', () => {
          checkMovement({ x: 2, y: 3 }, { x: 2, y: 3 }, 'crash', direction, 'north', arena);
        });

        test('the heading is south', () => {
          checkMovement({ x: 2, y: -3 }, { x: 2, y: -3 }, 'crash', direction, 'south', arena);
        });

        test('the heading is east', () => {
          checkMovement({ x: 3, y: -3 }, { x: 3, y: -3 }, 'crash', direction, 'east', arena);
        });

        test('the heading is west', () => {
          checkMovement({ x: -3, y: 0 }, { x: -3, y: 0 }, 'crash', direction, 'west', arena);
        });
      });
    });
  });
});
