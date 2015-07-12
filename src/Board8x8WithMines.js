function Board8x8WithMines(player) {
    this._mines = NaN;
    Player8x8Board.call(this, player);
    var _constructor = function (scope) {
        /*
            Set up all random mines for this board and record the number added
         */
        scope._mines = 0;
        var shouldAddMine = false;
        for (var colIndex = 0, col; col = scope._grid[colIndex]; colIndex++){
            for (var rowIndex = 0, row; row = col[rowIndex]; rowIndex++){
                shouldAddMine = !!(Math.round(Math.random()));
                if (shouldAddMine && !(row instanceof Player)) {
                    col[rowIndex] = "*";
                    scope._mines += 1;
                }
            }
        }
    }(this);
};

// create inheritance chain
Board8x8WithMines.prototype = Object.create(Player8x8Board.prototype);
Board8x8WithMines.prototype.constructor = Player8x8Board;

Board8x8WithMines.prototype.getMineCount = function () {
    return this._mines;
};

//override move player to encounter mines
Player8x8Board.prototype.movePlayer = function(x, y){
    // places the player at x and y
    // zero indexed coordinates
    // will record a mine hit
    this._grid[this.getPlayerPositionX()][this.getPlayerPositionY()] = "-";
    this._grid[x][y] = this._player;
};