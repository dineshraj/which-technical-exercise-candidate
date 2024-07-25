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

const runWith = (input : Input) => {
  console.log('🚀 ~ runWith ~ input:', input);
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

export { runWith };
