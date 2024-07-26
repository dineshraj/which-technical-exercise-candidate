import { Heading, Direction, HeadingMap } from '../types';

const headingMap = {
  left: {
    north: 'west',
    south: 'east',
    east: 'north',
    west: 'south',
  },
  right: {
    north: 'east',
    south: 'west',
    east: 'south',
    west: 'north',
  },
} as HeadingMap;

const updateHeading = (currentHeading: Heading, nextDirection: Direction): Heading => {
  if (nextDirection === 'forward') {
    return currentHeading;
  }

  return headingMap[nextDirection][currentHeading];
};

export default updateHeading;
