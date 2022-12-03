export function RucksackReorganization2(input: string): number {
  const rugSacks = input.split("\n")
  var totalScore = 0
  for (var i = 0; i < rugSacks.length / 3; i++) {
    var score = GetSackScore(
      rugSacks[i * 3],
      rugSacks[i * 3 + 1],
      rugSacks[i * 3 + 2]
    )
    totalScore += score
  }
  return totalScore
}

function GetSackScore(sack1: string, sack2: string, sack3: string): number {
  var itemScore = 0
  sack1.split("").forEach((elt) => {
    if (sack2.includes(elt) && sack3.includes(elt)) {
      itemScore = GetItemScore(elt)
    }
  })
  return itemScore
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
