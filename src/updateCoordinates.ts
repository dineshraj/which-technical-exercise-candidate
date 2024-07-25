import { coords, direction, heading } from './types';

export default ([x, y]: coords, nextDirection: direction, heading: heading) => {
  if (nextDirection === 'left' || nextDirection === 'right') {
    return [x, y];
  }

  switch (heading) {
    case 'north':
      return [x, y + 1];
    case 'south':
      return [x, y - 1];
    case 'east':
      return [x + 1, y];
    case 'west':
      return [x - 1, y];
  }
};
