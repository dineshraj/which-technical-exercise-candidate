export type Heading = 'north' | 'south' | 'east' | 'west';
export type Direction = 'forward' | 'left' | 'right';
export type Status = 'ok' | 'error' | 'crash';

export interface Coords {
  x: number;
  y: number;
}
export interface Arena {
  corner1: Coords;
  corner2: Coords;
}

interface Robot {
  location: Coords;
  heading: Heading;
  directions: Array<Direction>;
}

export interface Input {
  arena: Arena;
  robots: Array<Robot>;
}

export interface Output {
  heading: Heading;
  location: Coords;
  path: Array<Direction>;
  status: Status;
}

export type HeadingMap = {
  [direction in 'left' | 'right']: {
    [heading in Heading]: Heading;
  };
};
