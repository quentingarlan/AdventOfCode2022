const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")
let inputTest: string = `A Y
B X
C Z`

describe("Advent Calendar", function () {
  describe("RockPaperScissors1", function () {
    it("should return 15", function () {
      var result = part1.RockPaperScissors(inputTest)
      assert.equal(result, 15)
    })

    it("should return 14531", function () {
      var result = part1.RockPaperScissors(input.inputTest)
      assert.equal(result, 14531)
    })
  })
  describe("RockPaperScissors2", function () {
    it("should return 12", function () {
      var result = part2.RockPaperScissors(inputTest)
      assert.equal(result, 12)
    })

    it("should return 196804", function () {
      var result = part2.RockPaperScissors(input.inputTest)
      assert.equal(result, 196804)
    })
  })
})
