export function CathodeRayTube(input: string): number {
  const lines = input.split("\n")
  let screen = GetSignal(lines)
  console.log(screen.forEach((row) => console.log(row.join(""))))
  return 0
}

function GetSignal(lines: string[]): string[][] {
  let screen: string[][] = new Array(6)
    .fill(" ")
    .map(() => new Array(40).fill(" "))

  let cycle: number = 1
  let register: number = 1
  lines.forEach((line) => {
    const lineArr = line.split(" ")
    const instruction = lineArr[0]

    if (instruction === "addx") {
      for (let i = 0; i < 2; i++) {
        screen = updateScreen(cycle, register, screen)
        cycle++
      }
      const value = parseInt(lineArr[1])
      register += value
    }
    if (instruction === "noop") {
      screen = updateScreen(cycle, register, screen)
      cycle++
    }
  })
  return screen
}

function updateScreen(cycle: number, x: number, screen: string[][]) {
  const row = Math.floor((cycle - 1) / 40)
  const col = (cycle - 1) % 40

  if ([x - 1, x, x + 1].includes(col)) {
    if (screen[row]) {
      screen[row][col] = "#"
    }
  } else {
    if (screen[row]) {
      screen[row][col] = " "
    }
  }

  return screen
}
