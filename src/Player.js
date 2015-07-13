function Player(lives) {
    this._row = 0;
    this._col = 0;
    this._mineHits = 0;
    this._lives = lives;
};

Player.prototype.getRow = function(){
    return this._row;
};

Player.prototype.getCol = function(){
    return this._col;
};

Player.prototype.getPosition = function(){
    return [this.getCol(), this.getRow()];
};

Player.prototype.getMineHits = function () {
    return this._mineHits;
};

Player.prototype.absorbMineHit = function (){
    this._lives -= 1;
    this._mineHits += 1;
};

Player.prototype.getLives = function () {
    return this._lives;
};
