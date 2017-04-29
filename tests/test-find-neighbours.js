var test = require('tape')
var findNeigbours = require('../find-neighbours.js')

test("Test set up is working", function(t) {
    t.pass()
    t.end()
})

test("Able to identify middle cell's neighbours' coordinates", function(t) {
    var x = 56
    var y = 82
    var expected = [
        [55, 81],
        [55, 82],
        [55, 83],
        [56, 81],
        [56, 83],
        [57, 81],
        [57, 82],
        [57, 83]
    ]

    var actual = findNeigbours(x, y)
    t.deepEqual(actual, expected)
    t.end()
})


test("Able to identify side cell's neighbours' coordinates", function(t) {
    var x = 0
    var y = 82
    var size = 100
    var expected = [
        [0, 81],
        [0, 83],
        [1, 81],
        [1, 82],
        [1, 83]
    ]
    var actual = findNeigbours(x, y, size)
    t.deepEqual(actual, expected)
    t.end()
})


test("Able to identify corner cell's neighbours' coordinates", function(t) {
    var x = 0
    var y = 99
    var size = 100
    var expected = [
        [0, 98],
        [1, 98],
        [1, 99]
    ]
    var actual = findNeigbours(x, y, size)
    t.deepEqual(actual, expected)
    t.end()
})
