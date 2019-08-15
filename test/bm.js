const test = require('./testcase.json')
const jtx = require('./src/jtx')

let results = []
const count = 100000
for (var i=0; i<count; i++) {
    const start = process.hrtime()
    jtx(test)
    const diff = process.hrtime(start)
    results.push(diff[0] * 1000000 + diff[1] / 1000)
}

const sum = results.reduce((a, i) => a + i, 0)
const avg = sum / results.length
console.log('AVERAGE: ' + avg.toFixed() + 'ms for ' + count + ' iterations')