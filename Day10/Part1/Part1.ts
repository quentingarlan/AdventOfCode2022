export function CathodeRayTube(input: string): number {
  const lines = input.split("\n")
  return GetSignal(lines)
}

function GetSignal(lines: string[]): number {
  let signalStrengthSum = 0
  let cycle: number = 1
  let register: number = 1
  lines.forEach((line) => {
    const lineArr = line.split(" ")
    const instruction = lineArr[0]

    if (instruction === "addx") {
      for (let i = 0; i < 2; i++) {
        signalStrengthSum += getPower(cycle, register)
        cycle++
      }
      const value = parseInt(lineArr[1])
      register += value
    }
    if (instruction === "noop") {
      signalStrengthSum += getPower(cycle, register)
      cycle++
    }
  })
  return signalStrengthSum
}

function getPower(cycle: number, x: number): number {
  if ((cycle - 20) % 40 === 0) {
    return cycle * x
  }
  return 0
}
