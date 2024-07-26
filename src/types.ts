export type Heading = 'north' | 'south' | 'east' | 'west';
export type Direction = 'forward' | 'left' | 'right';
export type Status = 'ok' | 'error' | 'crash';
export type Arena = {
  corner1: {
    x: number;
    y: number;
  };
  corner2: {
    x: number;
    y: number;
  };
};
export type Coords = [number, number];
