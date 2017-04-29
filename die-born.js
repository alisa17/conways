var gameInit = require('./game-init.js')

var boardNew = gameInit.birthBoard(20, 0.4)

function isOutOfBounds(x, y, board) {
    var maximumCoordinate = board.length
    return x < 0 || y < 0 || x >= maximumCoordinate || y >= maximumCoordinate
}


module.exports = {
    isOutOfBounds
}
