export function TuningTrouble(input: string): number {
  let indexFound = 0
  for (let i = 0; i < input.length - 4; i++) {
    if (Next4CharsDifferent(input, i)) {
      return i + 4
    }
  }
  return indexFound
}

const Next4CharsDifferent = (input: string, start: number) => {
  const charArray = input.split("")
  const next4Chars = charArray.slice(start, start + 4)
  const uniqueChars = new Set(next4Chars)
  //If uniqueChars is 4 in length we have a 4 characters unique set
  if (uniqueChars.size === 4) {
    return true
  } else {
    return false
  }
}
