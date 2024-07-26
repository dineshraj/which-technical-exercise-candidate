import { Coords, Direction, Heading, Arena, Status } from '../types';

export default (
  [x, y]: Coords,
  nextDirection: Direction,
  heading: Heading,
  { corner1, corner2 }: Arena
): [Coords, Status] => {
  if (nextDirection === 'left' || nextDirection === 'right') {
    return [[x, y], 'ok'];
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
