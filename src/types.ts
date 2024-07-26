export type Heading = 'north' | 'south' | 'east' | 'west';
export type Direction = 'forward' | 'left' | 'right';
export type Status = 'ok' | 'error' | 'crash';
export interface Arena {
  corner1: {
    x: number;
    y: number;
  };
  corner2: {
    x: number;
    y: number;
  };
}
export interface Coords {
  x: number;
  y: number;
}
export interface Input {
  arena: Arena;
  location: {
    x: number;
    y: number;
  };
  heading: Heading;
  directions: Array<Direction>;
}
