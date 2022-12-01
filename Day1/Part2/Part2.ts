export function CalorieCounting(advList: string): number {
  const instructions = advList.split("\n\n")
  let totalArray: Array<number> = []
  instructions.forEach((elt) => {
    let cal = elt.split("\n")
    let total = 0
    cal.forEach((c) => {
      total += parseInt(c)
    })
    totalArray.push(total)
  })
  totalArray.sort((a, b) => b - a)
  let maxTotal = totalArray[0] + totalArray[1] + totalArray[2]
  return maxTotal
}
