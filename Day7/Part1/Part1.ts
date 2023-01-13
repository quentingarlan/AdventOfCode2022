export function NoSpaceLeftOnDevice(input: string): number {
  const rootDir = getDirectories(input)
  const dirList = flattenDir(rootDir)

  const sizeLimit = 100000
  console.log(dirList)
  return dirList
    .filter((dir) => dir.getSize() < sizeLimit)
    .reduce((sum, dir) => sum + dir.getSize(), 0)
}

function getDirectories(input: string) {
  const commands = parseCommands(input)
  const rootDirectory = new Directory("/", undefined)
  let currentDirectory: Directory = rootDirectory

  for (const command of commands) {
    switch (command[0].substring(0, 2)) {
      case "ls":
        const listResults = command.slice(1)
        currentDirectory.addListResults(listResults)
        break
      case "cd":
        let newDir = currentDirectory.changeDirectory(command[0].substring(3))
        if (newDir) {
          currentDirectory = newDir
        }
        break
      default:
        console.log("Error")
    }
  }

  return rootDirectory
}

function parseCommands(input: string) {
  return input
    .split("\n$ ")
    .map((el) => el.split("\n"))
    .slice(1)
}

function flattenDir(directory: Directory) {
  const dirs = [directory]
  directory.children.forEach((child) => {
    dirs.push(...flattenDir(child))
  })

  return dirs
}

class Directory {
  files: string[][] = []
  children: Directory[] = []
  name: string
  parentDirectory?: Directory

  constructor(name: string, parentDirectory?: Directory) {
    this.name = name
    this.parentDirectory = parentDirectory
  }

  getSize() {
    const fileSize: number = this.files.reduce(
      (sum, file) => (sum += Number(file[0])),
      0
    )
    const childDirSize: number = this.children.reduce(
      (sum, child) => (sum += child.getSize()),
      0
    )
    return fileSize + childDirSize
  }

  changeDirectory(directoryName: string): Directory | undefined {
    let directory =
      directoryName === ".."
        ? this.parentDirectory
        : this.children.find((child) => child.name === directoryName)
    return directory
  }

  addListResults(results: string[]) {
    for (const result of results) {
      const item = result.split(" ")
      if (item[0] === "dir") {
        this.children.push(new Directory(item[1], this))
      } else {
        this.files.push(item)
      }
    }
  }
}
