export function RockPaperScissors(input: string): number {
  const instructions = input.split("\n")

  const rockScore = 1
  const paperScore = 2
  const scissorScore = 3

  const rockOpponent = "A"
  const paperOpponent = "B"
  const scissorOpponent = "C"

  const lose = "X"
  const draw = "Y"
  const win = "Z"

  const lostScore = 0
  const drawScore = 3
  const winScore = 6

  let score = 0

  instructions.forEach((instr) => {
    const moves = instr.split(" ")
    switch (moves[0]) {
      case rockOpponent:
        if (moves[1] == draw) {
          score += rockScore + drawScore
        }
        if (moves[1] == lose) {
          score += scissorScore + lostScore
        }
        if (moves[1] == win) {
          score += paperScore + winScore
        }
        break
      case paperOpponent:
        if (moves[1] == lose) {
          score += rockScore + lostScore
        }
        if (moves[1] == draw) {
          score += paperScore + drawScore
        }
        if (moves[1] == win) {
          score += scissorScore + winScore
        }
        break
      case scissorOpponent:
        if (moves[1] == win) {
          score += rockScore + winScore
        }
        if (moves[1] == lose) {
          score += paperScore + lostScore
        }
        if (moves[1] == draw) {
          score += scissorScore + drawScore
        }
        break
    }
  })
  return score
}
