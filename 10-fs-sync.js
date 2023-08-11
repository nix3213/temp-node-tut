// Module Filesystem

const filesystem = require('fs')
//console.log(filesystem)

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

writeFileSync(
    './content/result-syncBuiltinESMExports.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with the tast')
console.log('starting the next task')
// flag: a is an text-appendix
