export function SupplyStacks(docks: string[][], input: string): string {
  const inputParts: string[] = input.split("\n\n")
  const moves = inputParts[1].split("\n")
  let moveNb = 0
  let from = 0
  let to = 0
  moves.forEach((line) => {
    const moveParts = line.split(" ")
    moveNb = parseInt(moveParts[1])
    from = parseInt(moveParts[3]) - 1
    to = parseInt(moveParts[5]) - 1

    let craneStack: string[] = []
    for (let i = 0; i < moveNb; i++) {
      craneStack.push(docks[from][i])
    }
    craneStack.forEach(() => {
      docks[from].shift()
    })
    docks[to] = craneStack.concat(docks[to])
  })

  let result = ""
  docks.forEach((dock) => {
    result += dock[0]
  })

  return result
}
