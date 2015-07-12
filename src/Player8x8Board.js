function Player8x8Board(player){
    this._player = null;
    Board.call(this, 8, 8);
    var _constructor = function(scope, player){
        scope._player = player;
        scope._grid[0][0] = scope._player;
    }(this, player);
};

// create inheritance chain
Player8x8Board.prototype = Object.create(Board.prototype);
Player8x8Board.prototype.constructor = Board;

// new methods for this child of Board
Player8x8Board.prototype.getPlayerPositionY = function(){
    // return an array containing coordinates
    return this._player.getRow();
};
Player8x8Board.prototype.getPlayerPositionX = function(){
    // return an array containing coordinates
    return this._player.getCol();
};
Player8x8Board.prototype.findPlayerInBoard = function(){
    // analyse the board for the player and return them if found
    for (var colIndex = 0, col; col = this._grid[colIndex]; colIndex++ ){
        for (var rowIndex = 0, rowItem; rowItem = col[rowIndex]; rowIndex++){
            if (rowItem instanceof Player){
                return rowItem;
            }
        }
    }
    return null;
};
Player8x8Board.prototype.hasPlayerWon = function(){
    // check to see if player has reached the top row
    // return Boolean
    for (var colIndex = 0, col; col = this._grid[colIndex]; colIndex++ ){
        if (col[col.length-1] === this._player){
            return true;
        }
    }
    return false;
};
Player8x8Board.prototype.movePlayer = function(x, y){
    // places the player at x and y
    // zero indexed coordinates
    this._grid[this.getPlayerPositionX()][this.getPlayerPositionY()] = "-";
    this._grid[x][y] = this._player;
};