import constatns from "./app/constants";
const matrix = new Array(8).fill("").map(() => new Array(8).fill(""));
const LOWER_LIMIT = 0;
const HIGHER_LIMIT = 7;
let top: any, bottom: any, left: any, right: any;

const getAccesiblePathForBishop = (name: string, x: number, y: number) => {
  let topLeft: any = [],
    topRight: any = [],
    bottomLeft: any = [],
    bottomRight: any = [];

  for (let i = LOWER_LIMIT; i <= HIGHER_LIMIT; i++) {
    if (x - i >= LOWER_LIMIT && y - i >= LOWER_LIMIT)
      topLeft.push([x - i, y - i]);

    if (x + i <= HIGHER_LIMIT && y - i >= LOWER_LIMIT)
      topRight.push([x + i, y - i]);

    if (x - i >= LOWER_LIMIT && y + i <= HIGHER_LIMIT)
      bottomLeft.push([x - i, y + i]);

    if (x + i <= HIGHER_LIMIT && y + i <= HIGHER_LIMIT)
      bottomRight.push([x + i, y + i]);
  }

  return [topLeft, topRight, bottomLeft, bottomRight];
};

const getAccesiblePathForRock = (name: string, x: number, y: number) => {
  let top: any = [],
    bottom: any = [],
    left: any = [],
    right: any = [];

  for (let i = LOWER_LIMIT; i < x; i++) {
    top.push([i, y]);
  }

  for (let i = x + 1; i <= HIGHER_LIMIT; i++) {
    bottom.push([i, y]);
  }

  for (let i = LOWER_LIMIT; i < y; i++) {
    left.push([x, i]);
  }

  for (let i = y; i <= HIGHER_LIMIT; i++) {
    right.push([x, i]);
  }

  return [top, right, bottom, left];
};

export const getAcccesiblePathForToken = (
  name: string,
  type: string,
  x: number,
  y: number
) => {
  switch (name) {
    case constatns.KING:
      const result = [];

      //top
      if (y - 1 >= LOWER_LIMIT) {
        result.push([[x, y - 1]]);
      }

      // bottom
      if (y + 1 <= HIGHER_LIMIT) {
        result.push([[x, y + 1]]);
      }

      // left
      if (x - 1 >= LOWER_LIMIT) {
        result.push([[x - 1, y]]);
      }

      // right
      if (x + 1 <= HIGHER_LIMIT) {
        result.push([[x + 1, y]]);
      }

      return result;
    case constatns.ROOK:
      return getAccesiblePathForRock(name, x, y);
    case constatns.KNIGHT:
      const knightResults = [];

      // top -left
      if (x - 2 >= LOWER_LIMIT && y - 1 >= LOWER_LIMIT)
        knightResults.push([x - 2, y - 1]);
      if (x - 1 >= LOWER_LIMIT && y - 2 >= LOWER_LIMIT)
        knightResults.push([x - 1, y - 2]);

      // top -right
      if (x - 2 >= LOWER_LIMIT && y + 1 <= HIGHER_LIMIT)
        knightResults.push([x - 2, y + 1]);
      if (x - 1 >= LOWER_LIMIT && y + 2 <= HIGHER_LIMIT)
        knightResults.push([x - 1, y + 2]);

      // bottom-left
      if (x + 1 <= HIGHER_LIMIT && y - 2 >= LOWER_LIMIT)
        knightResults.push([x + 1, y - 2]);
      if (x + 2 <= HIGHER_LIMIT && y - 1 >= LOWER_LIMIT)
        knightResults.push([x + 2, y - 1]);

      // bottom-right
      if (x + 1 <= HIGHER_LIMIT && y + 2 <= HIGHER_LIMIT)
        knightResults.push([x + 1, y + 2]);
      if (x + 2 <= HIGHER_LIMIT && y + 1 <= HIGHER_LIMIT)
        knightResults.push([x + 2, y + 1]);

      return [knightResults];
    case constatns.QUEEN:
      return [
        ...getAccesiblePathForBishop(name, x, y),
        ...getAccesiblePathForRock(name, x, y),
      ];
    case constatns.BISHOP:
      return getAccesiblePathForBishop(name, x, y);
    case constatns.PAWN:
      const results = [];
      if (type == constatns.TYPE.WHITE) {
        if (x - 1 >= LOWER_LIMIT) {
          results.push([x - 1, y]);
        }
        if (x - 2 >= LOWER_LIMIT) {
          results.push([x - 2, y]);
        }
      }

      if (type == constatns.TYPE.BLACK) {
        if (x + 1 <= HIGHER_LIMIT) {
          results.push([x + 1, y]);
        }
        if (x + 2 <= HIGHER_LIMIT) {
          results.push([x + 2, y]);
        }
      }

      return [results];
  }
  return [[]];
};
