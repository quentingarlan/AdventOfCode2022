const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")
let inputTest: string = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

describe("Advent Calendar", function () {
  describe("CampCleanup1", function () {
    it("should return 2", function () {
      var result = part1.CampCleanup(inputTest)
      assert.equal(result, 2)
    })

    it("should return 534", function () {
      var result = part1.CampCleanup(input.inputTest)
      assert.equal(result, 534)
    })
  })
  describe("CampCleanup2", function () {
    it("should return 4", function () {
      var result = part2.CampCleanup(inputTest)
      assert.equal(result, 4)
    })
    it("should return 841", function () {
      var result = part2.CampCleanup(input.inputTest)
      assert.equal(result, 841)
    })
  })
})
