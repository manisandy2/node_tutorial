const path = require("path")

console.log(path.sep)

const file_path = path.join('\folder','subfloder','new.txt')
console.log(file_path)

console.log(path.basename(file_path))

console.log(path.resolve(__dirname,'folder','subfolder','new.txt'))