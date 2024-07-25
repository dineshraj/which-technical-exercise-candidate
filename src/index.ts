import { readFileSync } from 'fs';

type heading = 'north' | 'south' | 'east' | 'west';
type direction = 'forward' | 'left' | 'right';

const validDirections: Array<direction> = ['forward', 'left', 'right'];

interface Arena {
  corner1: {
    x: number;
    y: number;
  };
  corner2: {
    x: number;
    y: number;
  };
}

interface Input {
  arena: Arena;
  location: {
    x: number;
    y: number;
  };
  heading: heading;
  directions: Array<direction>;
}

const updateHeading = (currentHeading: heading, nextDirection: direction) => {
  if (nextDirection === 'forward') {
    return currentHeading;
  }

  switch (nextDirection) {
    case 'left':
      switch (currentHeading) {
        case 'north':
          return 'west';
        case 'west':
          return 'south';
        case 'south':
          return 'east';
        case 'east':
          return 'south';
      }
      break;
    case 'right':
      switch (currentHeading) {
        case 'north':
          return 'east';
        case 'east':
          return 'south';
        case 'south':
          return 'west';
        case 'west':
          return 'north';
      }
  }
};

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
