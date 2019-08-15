#! /usr/bin/env node
const input = process.argv.slice(2)

try {
    const data = JSON.parse(input[0])
    console.log(data)
} catch (e) {
    if (e instanceof SyntaxError) {
        // throw new SyntaxError('Your input was not valid JSON')
        const data = input[0]
        console.log(data)
    }
}

