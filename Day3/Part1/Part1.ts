export function RucksackReorganization(input: string): number {
  const rugSacks = input.split("\n")
  var totalScore = 0
  rugSacks.forEach((sack) => {
    totalScore += GetSackScore(sack)
  })
  return totalScore
}

function GetSackScore(sack: string): number {
  const sackSize = sack.length
  for (var i = 0; i < sackSize / 2; i++) {
    for (var j = sackSize / 2; j < sackSize; j++) {
      if (sack[i] === sack[j]) {
        return GetItemScore(sack[i])
      }
    }
  }
  return 0
}

function GetItemScore(input: string): number {
  var score = 0
  if (isUpperCase(input)) {
    score = input.toLowerCase().charCodeAt(0) - 96 + 26
  } else {
    score = input.charCodeAt(0) - 96
  }
  return score
}

function isUpperCase(input: string): boolean {
  if (input == input.toUpperCase()) {
    return true
  } else {
    return false
  }
}
