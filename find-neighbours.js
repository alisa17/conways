var isOutOfBounds = require('./is-out-of-bounds.js')


function findNeigbours(x, y, size) {
    var coords = [];
    for (i = (x - 1); i < (x + 2); i++) {
        for (j = (y - 1); j < (y + 2); j++) {
            if (
              (x !== i || y !== j) &
              (!isOutOfBounds(i, j, size))
            ) {
                coords.push([i, j])
            };
        }
    }
    return coords
}


module.exports = findNeigbours
