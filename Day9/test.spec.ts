const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

let inputTest: string = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

describe("Advent Calendar", function () {
  describe("RopeBridge1", function () {
    it("should return 13", function () {
      var result = part1.RopeBridge(inputTest)
      assert.equal(result, 13)
    })

    // it("should return 1832", function () {
    //   var result = part1.RopeBridge(input.inputTest)
    //   assert.equal(result, 1832)
    // })
  })
  // describe("TuningTrouble2", function () {
  //   it("should return 8 ", function () {
  //     var result = part2.TreetopTreeHouse(inputTest)
  //     assert.equal(result, 8)
  //   })
  //   // it("should return 4183246", function () {
  //   //   var result = part2.TreetopTreeHouse(input.inputTest)
  //   //   assert.equal(result, 4183246)
  //   // })
  // })
})
