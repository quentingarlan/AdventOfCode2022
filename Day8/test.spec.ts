const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

let inputTest: string = `30373
25512
65332
33549
35390`

describe("Advent Calendar", function () {
  describe("TreetopTreeHouse1", function () {
    it("should return 21", function () {
      var result = part1.TreetopTreeHouse(inputTest)
      assert.equal(result, 21)
    })

    it("should return 1832", function () {
      var result = part1.TreetopTreeHouse(input.inputTest)
      assert.equal(result, 1832)
    })
  })
  describe("TuningTrouble2", function () {
    it("should return 8 ", function () {
      var result = part2.TreetopTreeHouse(inputTest)
      assert.equal(result, 8)
    })
    // it("should return 4183246", function () {
    //   var result = part2.TreetopTreeHouse(input.inputTest)
    //   assert.equal(result, 4183246)
    // })
  })
})
