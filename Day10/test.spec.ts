const assert = require("assert")
const input = require("./string.ts")
const inputTest = require("./testString.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

describe("Advent Calendar", function () {
  describe("CathodeRayTube1", function () {
    it("should return 13140", function () {
      var result = part1.CathodeRayTube(inputTest.inputTest)
      assert.equal(result, 13140)
    })

    it("should return 17840", function () {
      var result = part1.CathodeRayTube(input.input)
      assert.equal(result, 17840)
    })
  })
  describe("TuningTrouble2", function () {
    // it("should return 0", function () {
    //   var result = part2.CathodeRayTube(inputTest.inputTest)
    //   assert.equal(result, 0)
    // })
    it("should return 0", function () {
      var result = part2.CathodeRayTube(input.input)
      assert.equal(result, 0)
    })
  })
})
