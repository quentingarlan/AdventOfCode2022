const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

let inputTest: string = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`

describe("Advent Calendar", function () {
  describe("TuningTrouble1", function () {
    it("should return 7", function () {
      var result = part1.TuningTrouble(inputTest)
      assert.equal(result, 7)
    })

    it("should return 1640", function () {
      var result = part1.TuningTrouble(input.inputTest)
      assert.equal(result, 1640)
    })
  })
  describe("TuningTrouble2", function () {
    it("should return 19 ", function () {
      var result = part2.TuningTrouble(inputTest)
      assert.equal(result, 19)
    })
    it("should return 3613", function () {
      var result = part2.TuningTrouble(input.inputTest)
      assert.equal(result, 3613)
    })
  })
})
