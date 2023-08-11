// Modules - Encapsulated Code (only share miniumun)
// CommonJs, every file is module (by default)

const sayHi = require('./5-utils')
const names = require('./4-names.js')
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
