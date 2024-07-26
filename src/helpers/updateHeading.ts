import { Heading, Direction } from '../types';

type HeadingMap = {
  [direction in 'left' | 'right']: {
    [heading in Heading]: Heading;
  };
};

const headingMap: HeadingMap = {
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
};

const updateHeading = (currentHeading: Heading, nextDirection: Direction): Heading => {
  if (nextDirection === 'forward') {
    return currentHeading;
  }

  return headingMap[nextDirection][currentHeading];
};

export default updateHeading;
