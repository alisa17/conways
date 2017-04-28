
function createBoard(size) {
    return Array(size).fill([]).map(function() {
        return Array(size).fill(0)
    })
}

function birthCell(percentage){
  return Math.random() < percentage ?  1 : 0
}

function birthArray(size, percentage) {
  var arr =[]
  for (var i=0; i<size; i++) {
      arr.push(birthCell(percentage))
  }
  return arr
}

function birthBoard(size, percentage) {
  return Array(size).fill([]).map(function() {
      return birthArray(size, percentage)
  })
}

module.exports = {
    createBoard,
    birthCell
    ,birthArray
    ,birthBoard
}
