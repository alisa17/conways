var test = require('tape')
var gameInit = require('../game-init.js')
var countLivingNeighbours = require('../count-living-neighbours.js')


test("Test set up is working", function(t) {
    t.pass()
    t.end()
})

test("Able to identify if cell is alive", function(t) {
    var size = 100
    var percentage = 0.4
    var x = 56
    var y = 82
    var board = gameInit.birthBoard(size, percentage)
    var expected = board[56][82]
    var actual = countLivingNeighbours.isAlive(x, y, board)
    t.equal(actual, expected)
    t.end()
})

test("Able to count living neighbours", function(t) {
    var board = [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 1, 1]
    ]
    var x = 2
    var y = 4
    var expected = 1
    var actual = countLivingNeighbours.countLivingNeighbours(x, y, board) 
    t.equal(actual, expected)
    t.end()
})
