import { readFileSync } from 'fs';
import updateHeading from './updateHeading';
import updateCoordinates from '././updateCoordinates';
import { Heading, Coords, Direction, Arena, Status } from './types';

interface Input {
  arena: Arena;
  location: {
    x: number;
    y: number;
  };
  heading: Heading;
  directions: Array<Direction>;
}

const runWith = ({ arena, location, heading, directions }: Input) => {
  const pathsTaken: Array<Direction> = [];
  let currentCoords: Coords = [location.x, location.y];
  let currentHeading: Heading = heading;
  let currentStatus: Status = 'ok';

  directions.forEach((direction) => {
    if (currentStatus !== 'error' && currentStatus !== 'crash') {
      pathsTaken.push(direction);
      if (direction === 'forward') {
        const [newCoords, newStatus] = updateCoordinates(currentCoords, direction, currentHeading, arena);
        currentCoords = newCoords;
        currentStatus = newStatus;
      } else if (direction === 'left' || direction === 'right') {
        currentHeading = updateHeading(currentHeading, direction);
      } else {
        currentStatus = 'error';
      }
    }
  });

  return {
    status: currentStatus,
    location: {
      x: currentCoords[0],
      y: currentCoords[1],
    },
    heading: currentHeading,
    path: pathsTaken,
  };
};

if (process.env.NODE_ENV === 'production') {
  try {
    const json = JSON.parse(readFileSync(process.stdin.fd, 'utf8'));
    runWith(json);
  } catch (e) {
    console.error('Error reading from stdin', e);
  }
}

export { runWith };
