const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")
let inputTest: string = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

describe("Advent Calendar", function () {
  describe("RockPaperScissors1", function () {
    it("should return 157", function () {
      var result = part1.RucksackReorganization(inputTest)
      assert.equal(result, 157)
    })

    it("should return 8088", function () {
      var result = part1.RucksackReorganization(input.inputTest)
      assert.equal(result, 8088)
    })
  })
  describe("RucksackReorganization2", function () {
    it("should return 70", function () {
      var result = part2.RucksackReorganization2(inputTest)
      assert.equal(result, 70)
    })

    it("should return 2522", function () {
      var result = part2.RucksackReorganization2(input.inputTest)
      assert.equal(result, 2522)
    })
  })
})
