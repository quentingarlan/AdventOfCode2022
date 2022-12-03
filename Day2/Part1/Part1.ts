export function RockPaperScissors(input: string): number {
  const instructions = input.split("\n")

  const rockScore = 1
  const paperScore = 2
  const scissorScore = 3

  const rockOpponent = "A"
  const paperOpponent = "B"
  const scissorOpponent = "C"

  const rock = "X"
  const paper = "Y"
  const scissor = "Z"

  const lostScore = 0
  const drawScore = 3
  const winScore = 6

  let score = 0

  instructions.forEach((instr) => {
    const moves = instr.split(" ")
    switch (moves[0]) {
      case rockOpponent:
        if (moves[1] == rock) {
          score += rockScore + drawScore
        }
        if (moves[1] == paper) {
          score += paperScore + winScore
        }
        if (moves[1] == scissor) {
          score += scissorScore + lostScore
        }
        break
      case paperOpponent:
        if (moves[1] == rock) {
          score += rockScore + lostScore
        }
        if (moves[1] == paper) {
          score += paperScore + drawScore
        }
        if (moves[1] == scissor) {
          score += scissorScore + winScore
        }
        break
      case scissorOpponent:
        if (moves[1] == rock) {
          score += rockScore + winScore
        }
        if (moves[1] == paper) {
          score += paperScore + lostScore
        }
        if (moves[1] == scissor) {
          score += scissorScore + drawScore
        }
        break
    }
  })
  return score
}
