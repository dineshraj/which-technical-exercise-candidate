import { Heading, Direction } from './types';

export default (currentHeading: Heading, nextDirection: Direction) => {
  if (nextDirection === 'forward') {
    return currentHeading;
  }

  switch (nextDirection) {
    case 'left':
      switch (currentHeading) {
        case 'north':
          return 'west';
        case 'west':
          return 'south';
        case 'south':
          return 'east';
        case 'east':
          return 'south';
        default:
          return;
      }
    case 'right':
      switch (currentHeading) {
        case 'north':
          return 'east';
        case 'east':
          return 'south';
        case 'south':
          return 'west';
        case 'west':
          return 'north';
        default:
          return;
      }
  }
};
