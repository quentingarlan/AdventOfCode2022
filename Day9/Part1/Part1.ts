export function RopeBridge(input: string): number {
  const moves = input.split("\n")
  return Visited(2, moves)
}

type Vector = { x: number; y: number }
type Rope = Vector[]

function Visited(knotCount: number, moves: string[]): number {
  let visited = new Set<string>()
  let newVector = <Vector>{ x: 0, y: 0 }
  const knots: Rope = Array.from(Array(knotCount), () => newVector)
  console.log("rope ", knots)
  moves.forEach((move) => {
    const moveSplit = move.split(" ")
    const direction = move[0]
    const distance = parseInt(moveSplit[1])
    for (let i = 0; i < distance; i++) {
      if (direction === "L") knots[0].x--
      if (direction === "U") knots[0].y++
      if (direction === "R") knots[0].x++
      if (direction === "D") knots[0].y--
      console.log("rope ", knots)
      for (let j = 1; j < knotCount; j++) {
        let xDist = knots[j - 1].x - knots[j].x
        let yDist = knots[j - 1].y - knots[j].y
        console.log("rope[j - 1] ", knots[j - 1])
        console.log("rope[j]", knots[j])
        console.log("xDist ", xDist)
        console.log("yDist", yDist)
        if (Math.abs(xDist) > 1 || Math.abs(yDist) > 1) {
          console.log("math sign x ", Math.sign(xDist))
          console.log("math sign y ", Math.sign(yDist))
          knots[j].x += Math.sign(xDist)
          knots[j].y += Math.sign(yDist)
        }
      }
      console.log("rope", knots)
      const lastKnot = knots.at(-1)
      visited.add(lastKnot!.x + "," + lastKnot!.y)
    }
  })
  console.log("visited", visited)
  return visited.size
}
