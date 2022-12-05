const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

let inputTest: string = `[D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

describe("Advent Calendar", function () {
  const docks = [
    ["C", "S", "G", "B"],
    ["G", "V", "N", "J", "H", "W", "M", "T"],
    ["S", "Q", "M"],
    ["M", "N", "W", "T", "L", "S", "B"],
    ["P", "W", "G", "V", "T", "F", "Z", "J"],
    ["S", "H", "Q", "G", "B", "T", "C"],
    ["W", "B", "P", "J", "T"],
    ["M", "Q", "T", "F", "Z", "C", "D", "G"],
    ["F", "P", "B", "H", "S", "N"],
  ]
  const docksTest = [["N", "Z"], ["D", "C", "M"], ["P"]]
  describe("SupplyStacks1", function () {
    it("should return CMZ", function () {
      var result = part1.SupplyStacks(docksTest, inputTest)
      assert.equal(result, "CMZ")
    })

    it("should return CFFHVVHNC", function () {
      var result = part1.SupplyStacks(docks, input.inputTest)
      assert.equal(result, "CFFHVVHNC")
    })
  })
  describe("SupplyStacks2", function () {
    const docks = [
      ["C", "S", "G", "B"],
      ["G", "V", "N", "J", "H", "W", "M", "T"],
      ["S", "Q", "M"],
      ["M", "N", "W", "T", "L", "S", "B"],
      ["P", "W", "G", "V", "T", "F", "Z", "J"],
      ["S", "H", "Q", "G", "B", "T", "C"],
      ["W", "B", "P", "J", "T"],
      ["M", "Q", "T", "F", "Z", "C", "D", "G"],
      ["F", "P", "B", "H", "S", "N"],
    ]
    const docksTest = [["N", "Z"], ["D", "C", "M"], ["P"]]
    it("should return MCD", function () {
      var result = part2.SupplyStacks(docksTest, inputTest)
      assert.equal(result, "MCD")
    })
    it("should return FSZWBPTBG", function () {
      var result = part2.SupplyStacks(docks, input.inputTest)
      assert.equal(result, "FSZWBPTBG")
    })
  })
})
