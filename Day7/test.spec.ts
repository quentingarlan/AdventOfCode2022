const assert = require("assert")
const input = require("./string.ts")
let part1 = require("./Part1/Part1.ts")
let part2 = require("./Part2/Part2.ts")

let inputTest: string = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

describe("Advent Calendar", function () {
  describe("NoSpaceLeftOnDevice1", function () {
    it("should return 95437", function () {
      var result = part1.NoSpaceLeftOnDevice(inputTest)
      assert.equal(result, 95437)
    })

    it("should return 1454188", function () {
      var result = part1.NoSpaceLeftOnDevice(input.inputTest)
      assert.equal(result, 1454188)
    })
  })
  describe("TuningTrouble2", function () {
    it("should return 24933642 ", function () {
      var result = part2.NoSpaceLeftOnDevice(inputTest)
      assert.equal(result, 24933642)
    })
    it("should return 4183246", function () {
      var result = part2.NoSpaceLeftOnDevice(input.inputTest)
      assert.equal(result, 4183246)
    })
  })
})
