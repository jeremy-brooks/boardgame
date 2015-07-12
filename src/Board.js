function Board(columns, rows) {
    this._grid = null;

    var _constructor = function (scope, /*int*/columns, /*int*/rows) {
        /* construct the grid based on length * width params injected */
        scope._grid = [];
        var newCol = null;
        for (var col = 0; col < columns; col++) {
            newCol = new Array(rows);
            scope._grid.push(newCol);
        }
    }(this, columns, rows);
}

Board.prototype.getNumberOfRows = function () {
    // assume that all columns are the same so just get the length of the first one.
    return this._grid[0].length;
};

Board.prototype.getNumberOfColumns = function () {
    // each grid item is a column
    return this._grid.length;
};

Board.prototype.getColumn = function (colIndex) {
    return this._grid[colIndex];
};

Board.prototype.getRow = function (rowIndex) {
    /* Because a row spans several arrays (columns)
     Just return a fake collection from all matching.
     */
    var row = [];
    for (var col = 0; col < this._grid.length; col++) {
        row.push(this._grid[col][rowIndex]);
    }
    return row;
};