const jtx = require('./jtx')

// Types

test('test string input', () => {
    const testData = 'test'
    const result = jtx(testData)
    expect(result).toBe('test')
})

test('test object input', () => {
    const testData = {test: 'value'}
    const result = jtx(testData)
    expect(result).toBe('<test>value</test>')
})

test('test valid json input', () => {
    const testData = JSON.stringify({test: 'value'})
    const result = jtx(testData)
    expect(result).toBe('<test>value</test>')
})

test('test invalid json input', () => {
    const testData = '{'
    const result = jtx(testData)
    expect(result).toBe('{')
})

test('test array input', () => {
    const testData = ['test']
    const result = jtx(testData)
    expect(result).toBe('<0>test</0>')
})

test('test numeric input', () => {
    const testData = 1
    const result = jtx(testData)
    expect(result).toBe('1')
})

test('test undefined input', () => {
    const testData = undefined
    const result = jtx(testData)
    expect(result).toBe('')
})

test('test null input', () => {
    const testData = null
    const result = jtx(testData)
    expect(result).toBe('')
})

test('test infinity input', () => {
    const testData = Infinity
    const result = jtx(testData)
    expect(result).toBe('Infinity')
})

test('test NaN input', () => {
    const testData = NaN
    const result = jtx(testData)
    expect(result).toBe('NaN')
})

// Documents
const testDocument = {
    test: {
        arrays: [
            'test',
            'one',
            'two'
        ]
    },
    i: 1,
    am: true,
    many: undefined,
    types: {
        hello: {
            again: {
                i: {
                    am: [
                        {
                            really: {
                                nested: null
                            }
                        }
                    ]
                }
            }
        }
    }
}

const testDocumentXml = '<test><arrays><0>test</0><1>one</1><2>two</2></arrays></test><i>1</i><am>true</am><types><hello><again><i><am><0><really><nested></nested></really></0></am></i></again></hello></types>'

test('test valid json input', () => {
    const testData = JSON.stringify(testDocument)
    const result = jtx(testData)
    expect(result).toBe(testDocumentXml)
})
