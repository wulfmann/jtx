#! /usr/bin/env node
const fs = require('fs')
const jtx = require('../dist/jtx')

const isFile = /^(.+)\/([^\/]+)$/

const input = process.argv.slice(2)

function parseInput (val) {
    let data = val
    if (input[0].match(isFile)) {
        data = fs.readFileSync(input[0])
    }
    return data
}

function loadJson (val) {
    let data
    try {
        data = JSON.parse(val)
    } catch (e) {
        if (e instanceof SyntaxError) {
            data = val
        }
    }
    return data
}

const data = parseInput(input)
const json = loadJson(data)
const result = jtx(json)

console.log(result)
