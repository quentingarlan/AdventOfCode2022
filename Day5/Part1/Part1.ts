export function SupplyStacks(docks: string[][], input: string): string {
  const inputParts: string[] = input.split("\n\n")
  const moves = inputParts[1].split("\n")
  let moveNb = 0
  let from = 0
  let to = 0
  moves.forEach((line) => {
    const moveParts = line.split(" ")
    moveNb = parseInt(moveParts[1])
    from = parseInt(moveParts[3])
    to = parseInt(moveParts[5])
    for (let i = 0; i < moveNb; i++) {
      let crate = docks[from - 1].shift()
      if (crate) {
        docks[to - 1].unshift(crate)
      }
    }
  })

  let result = ""
  docks.forEach((dock) => {
    result += dock[0]
  })

  return result
}
