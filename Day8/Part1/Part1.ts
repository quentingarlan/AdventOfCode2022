export function TreetopTreeHouse(input: string): number {
  const forest = input.split("\n")
  let treeCount = 0
  for (let i = 0; i < forest.length; i++) {
    console.log(forest[i])
    for (let j = 0; j < forest[i].length; j++) {
      let left = CountVisible(j, i, -1, 0, forest, forest[i][j])
      let right = CountVisible(j, i, 1, 0, forest, forest[i][j])
      let up = CountVisible(j, i, 0, -1, forest, forest[i][j])
      let down = CountVisible(j, i, 0, 1, forest, forest[i][j])
      if (up || down || left || right) treeCount++
    }
  }
  return treeCount
}

function CountVisible(
  x: number,
  y: number,
  xd: number,
  yd: number,
  forest: string[],
  start: string
): boolean {
  if (
    x === 0 ||
    x === forest.length - 1 ||
    y === 0 ||
    y === forest.length - 1
  ) {
    return true
  }

  if (start <= forest[y + yd][x + xd]) {
    return false
  }

  return CountVisible(x + xd, y + yd, xd, yd, forest, start)
}
