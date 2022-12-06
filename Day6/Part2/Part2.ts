export function TuningTrouble(input: string): number {
  let indexFound = 0
  for (let i = 0; i < input.length - 14; i++) {
    if (Next4CharsDifferent(input, i)) {
      return i + 14
    }
  }
  return indexFound
}

const Next4CharsDifferent = (input: string, start: number) => {
  const charArray = input.split("")
  const next4Chars = charArray.slice(start, start + 14)
  const uniqueChars = new Set(next4Chars)
  //If uniqueChars is 14 in length we have a 4 characters unique set
  if (uniqueChars.size === 14) {
    return true
  } else {
    return false
  }
}
