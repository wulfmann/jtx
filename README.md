# jtx

## Description

Tiny (~200b) JSON to XML conversion utility.

## Installation

`npm install jtx`

## Usage

```js
import jtx from 'jtx'

const myJson = {
    "hello": {
        "there": [
            {
                "i": null,
                "am": 1,
                "here": undefined
            }
        ]
    }
}

console.log(jtx(myJson))

// <hello><there><0><i></i><am>1</am></0></there></hello>
```

### Input

Accepts:
`String`
`Object`
`Array`

### Output

`XML String`

### Options

You can pass an optional configuration object as the last parameter:

```js
const myJson = { test: true }
jtx(myJson, { header: true })
// <?xml version="1.0" encoding="UTF-8" standalone="no" ?><test>true</test>
```

### Available Options

|name|type|default|
|header|boolean|false|
