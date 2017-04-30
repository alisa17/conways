var findNeigbours = require('./find-neighbours.js')

function isAlive(x, y, board) {
    return board[x][y]
}

function countLivingNeighbours(x, y, board) {
    var size = board.length
    var neighbours = findNeigbours(x, y, size)
    var count = 0
    for (var i = 0; i < neighbours.length; i++) {
        count += isAlive(board[i][0],board[i][1], board)
    }
    return count
}
module.exports = {
    isAlive,
    countLivingNeighbours
}
