var test = require('tape')
var game = require('../game.js')

test('test setup working', function(t) {
    t.pass()
    t.end()
})


test('able to create an empty board of specified size', function(t) {
var size = 5
var expected = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]
var actual = game.createBoard(size)
t.deepEqual(actual, expected)
t.end()
})
