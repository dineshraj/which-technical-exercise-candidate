import { readFileSync } from 'fs';
import updateHeading from './updateHeading';
import { Heading, Direction, Arena } from './types';

// const validDirections: Array<direction> = ['forward', 'left', 'right'];

interface Input {
  arena: Arena;
  location: {
    x: number;
    y: number;
  };
  heading: Heading;
  directions: Array<Direction>;
}

const runWith = (input: Input) => {
  return { status: 'error' };
};

if (process.env.NODE_ENV === 'production') {
  try {
    const json = JSON.parse(readFileSync(process.stdin.fd, 'utf8'));
    runWith(json);
  } catch (e) {
    console.error('Error reading from stdin', e);
  }
}

export { runWith, updateHeading };
