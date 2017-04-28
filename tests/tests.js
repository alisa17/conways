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

test('create a thing that is true a specified percentage of times', function(t) {
  var percentage = 0.4
  var expectedMaximum = 50
  var actual = 0
  for (var i = 0; i < 100; i++) {
  if(game.birthCell(percentage) == true) actual++
 }
  t.true(actual < expectedMaximum)
  t.end()
})
