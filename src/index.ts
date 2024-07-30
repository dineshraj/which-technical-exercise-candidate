import { readFileSync } from 'fs';
import updateHeading from './helpers/updateHeading';
import updateCoordinates from './helpers/updateCoordinates';
import { Heading, Coords, Direction, Input, Status, Output } from './types';

const runWith = ({ arena, robots }: Input): { robots: Array<Output> } => {
  console.log('🚀 ~ runWith ~ robots:', robots);
  const output: Array<Output> = [];

  robots.forEach(
    ({ location, heading, directions }: { location: Coords; heading: Heading; directions: Array<Direction> }) => {
      const pathsTaken: Array<Direction> = [];
      let currentCoords: Coords = location;
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

      output.push({
        status: currentStatus,
        location: currentCoords,
        heading: currentHeading,
        path: pathsTaken,
      });
    }
  );
  console.log('🚀 ~ runWith ~ output:', output);

  return { robots: output };
};

if (process.env.NODE_ENV === 'production') {
  try {
    const json = JSON.parse(readFileSync(process.stdin.fd, 'utf8'));
    const output = runWith(json);
    try {
      process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
    } catch (e) {
      console.error('Error writing to stdout', e);
    }
  } catch (e) {
    console.error('Error reading from stdin', e);
  }
}

export { runWith };
