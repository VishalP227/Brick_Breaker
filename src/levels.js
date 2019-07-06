import Brick from "/src/brick";
import Hearts from "./lives";

export function buildLevel(game, level) {
  let bricks = [];

  level.forEach((row, rowIndex) => {
    row.forEach((brick, brickIndex) => {
      if (brick === 1) {
        let position = {
          x: 80 * brickIndex,
          y: 50 + 24 * rowIndex
        };
        bricks.push(new Brick(game, position));
      }
    });
  });
  return bricks;
}

export function drawHearts(game) {
  let hearts = [];
  for (let i = 0; i < game.lives; i++) {
    let position = {
      x: 20 * i,
      y: 10
    };
    hearts.push(new Hearts(game, position));
  }
  return hearts;
}

export const level1 = [
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

export const level2 = [
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [0, 1, 1, 1, 1, 1, 0, 1, 1, 1]
];

export const level3 = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
