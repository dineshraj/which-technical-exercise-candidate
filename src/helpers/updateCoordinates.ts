import { Coords, Direction, Heading, Arena, Status } from '../types';

const updateCoordinates = (
  { x, y }: Coords,
  nextDirection: Direction,
  heading: Heading,
  { corner1, corner2 }: Arena
): [Coords, Status] => {
  if (nextDirection === 'left' || nextDirection === 'right') {
    return [{ x, y }, 'ok'];
  }

  const crash: [Coords, Status] = [{ x, y }, 'crash'];

  switch (heading) {
    case 'north':
      if (y + 1 > corner2.y) return crash;
      return [{ x, y: y + 1 }, 'ok'];
    case 'south':
      if (y - 1 < corner1.y) return crash;
      return [{ x, y: y - 1 }, 'ok'];
    case 'east':
      if (x + 1 > corner2.x) return crash;
      return [{ x: x + 1, y }, 'ok'];
    case 'west':
      if (x - 1 < corner1.x) return crash;
      return [{ x: x - 1, y }, 'ok'];
  }
};

export default updateCoordinates;
