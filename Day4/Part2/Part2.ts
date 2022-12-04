export function CampCleanup(input: string): number {
  const sections = input.split("\n")
  var totalOverlaps = 0
  sections.forEach((s) => {
    totalOverlaps += GetOverlapingAssignments(s)
  })
  return totalOverlaps
}

function GetOverlapingAssignments(assignment: string): number {
  const assignments = assignment.split(",")
  const firstAssignment = assignments[0]
  const secondAssignment = assignments[1]
  const firstAssignmentNbs = firstAssignment.split("-")
  const firstAssignmentFirstDigit = parseInt(firstAssignmentNbs[0])
  const firstAssignmentSecondDigit = parseInt(firstAssignmentNbs[1])
  const secondAssignmentNbs = secondAssignment.split("-")
  const secondAssignmentFirstDigit = parseInt(secondAssignmentNbs[0])
  const secondAssignmentSecondDigit = parseInt(secondAssignmentNbs[1])

  if (
    firstAssignmentSecondDigit < secondAssignmentFirstDigit ||
    firstAssignmentFirstDigit > secondAssignmentSecondDigit
  ) {
    return 0
  } else {
    return 1
  }
}
