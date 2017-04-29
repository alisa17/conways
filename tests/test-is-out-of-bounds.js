var test = require('tape')
var gameInit = require('../game-init.js')
var isOutOfBounds = require('../is-out-of-bounds.js')

test('test setup working', function(t) {
    t.pass()
    t.end()
})


test('able to identify if cell is out of bounds', function(t) {
    var size = 8
    var x = 7
    var y = 3
    var expected = false
    var actual = isOutOfBounds(x, y, size)
    t.equal(actual, expected)
    t.end()
})
