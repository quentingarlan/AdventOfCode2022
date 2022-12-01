export function CalorieCounting(advList: string): number {
  console.log(advList)
  const instructions = advList.split("\n\n")
  let maxTotal = 0
  instructions.forEach((elt) => {
    let cal = elt.split("\n")
    let total = 0
    cal.forEach((c) => {
      total += parseInt(c)
      if (total > maxTotal) {
        maxTotal = total
      }
    })
  })
  return maxTotal
}
