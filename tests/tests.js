var test = require('tape')
var gameInit = require('../game-init.js')

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
    var actual = gameInit.createBoard(size)
    t.deepEqual(actual, expected)
    t.end()
})

test('create a thing that is true a specified percentage of times', function(t) {
    var percentage = 0.4
    var expectedMaximum = 50
    var actual = 0
    for (var i = 0; i < 100; i++) {
        actual += gameInit.birthCell(percentage)
    }
    t.true(actual < expectedMaximum)
    t.end()
})


test('able to birth array of specified size and percentage', function(t) {
    var size = 100
    var percentage = 0.4
    var expected = 100
    var actual = gameInit.birthArray(size, percentage).length
    t.deepEqual(actual, expected)
    t.end()
})

test('able to populate board', function(t) {
    var size = 100
    var percentage = 0.4
    var expectedMaximum = 5000
    var actualBoard = gameInit.birthBoard(size, percentage)
    var actual = 0
    for (var i = 0; i < size; i++) {
        actual += actualBoard[i].reduce(function(a, b) {
            return a + b
        })
    }
    t.true(actual < expectedMaximum)
    t.end()


})
