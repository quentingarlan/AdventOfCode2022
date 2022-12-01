const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")
let inputTest: string = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

describe("Advent Calendar", function () {
  describe("Calorie Counting1", function () {
    it("should return 24000", function () {
      var result = part1.CalorieCounting(inputTest)
      assert.equal(result, 24000)
    })

    it("should return 66186", function () {
      var result = part1.CalorieCounting(input.inputTest)
      assert.equal(result, 66186)
    })
  })
  describe("Calorie Counting2", function () {
    it("should return 45000", function () {
      var result = part2.CalorieCounting(inputTest)
      assert.equal(result, 45000)
    })

    it("should return 196804", function () {
      var result = part2.CalorieCounting(input.inputTest)
      assert.equal(result, 196804)
    })
  })
})
