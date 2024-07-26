import { Heading, Direction } from '../types';

type HeadingMap = {
  [direction in 'left' | 'right']: {
    [heading in Heading]: Heading;
  };
};

export default (currentHeading: Heading, nextDirection: Direction): Heading => {
  if (nextDirection === 'forward') {
    return currentHeading;
  }

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

  return headingMap[nextDirection][currentHeading];
};
