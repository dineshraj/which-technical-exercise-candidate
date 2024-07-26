import { Coords, Direction, Heading, Arena } from './types';

export default ([x, y]: Coords, nextDirection: Direction, heading: Heading, { corner1, corner2 }: Arena) => {
  if (nextDirection === 'left' || nextDirection === 'right') {
    return [x, y];
  }

  switch (heading) {
    case 'north':
      if (y + 1 > corner2.y) return [[x, y], 'crash'];
      return [[x, y + 1], 'ok'];
    case 'south':
      if (y - 1 < corner1.y) return [[x, y], 'crash'];
      return [[x, y - 1], 'ok'];
    case 'east':
      if (x + 1 > corner2.x) return [[x, y], 'crash'];
      return [[x + 1, y], 'ok'];
    case 'west':
      if (x - 1 < corner1.x) return [[x, y], 'crash'];
      return [[x - 1, y], 'ok'];
  }
};
