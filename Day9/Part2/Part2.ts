export function TreetopTreeHouse(input: string): number {
  const forest = input.split("\n")

  let scores: number[] = []
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      console.log("forest[i][j]")
      let left = CountTotal(j, i, -1, 0, forest, forest[i][j])
      let right = CountTotal(j, i, 1, 0, forest, forest[i][j])
      let up = CountTotal(j, i, 0, -1, forest, forest[i][j])
      let down = CountTotal(j, i, 0, 1, forest, forest[i][j])
      console.log("left", left)
      console.log("right", right)
      console.log("up", up)
      console.log("down", down)
      scores.push(left * right * up * down)
    }
  }
  console.log("scores", scores)
  return Math.max(...scores)
}

function CountTotal(
  x: number,
  y: number,
  xd: number,
  yd: number,
  input: string[],
  start: string
): number {
  console.log("input.length", input.length)
  console.log("y", y)
  console.log("x", x)
  if (x === 0 || x === input.length - 1 || y === 0 || y === input.length - 1) {
    console.log("0")
    return 0
  }

  if (start <= input[y + yd][x + xd]) {
    console.log("1")
    return 1
  }
  console.log(
    "CountVisible",
    1 + CountTotal(x + xd, y + yd, xd, yd, input, start)
  )
  return 1 + CountTotal(x + xd, y + yd, xd, yd, input, start)
}
