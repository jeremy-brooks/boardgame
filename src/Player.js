function Player() {
    this._row = 0;
    this._col = 0;
};

Player.prototype.getRow = function(){
    return this._row;
};

Player.prototype.getCol = function(){
    return this._col;
};