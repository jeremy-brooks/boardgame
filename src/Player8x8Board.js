function Player8x8Board(player){
    this._player = null;
    Board.call(this, 8, 8);
    var _constructor = function(scope, player){
        scope._player = player;
    }(this, player);
};

// create inheritance chain
Player8x8Board.prototype = Object.create(Board.prototype);
Player8x8Board.prototype.constructor = Board;

// new methods for this child of Board
Player8x8Board.prototype.getPlayerPosition = function(){
    return this._player.getPosition();
};