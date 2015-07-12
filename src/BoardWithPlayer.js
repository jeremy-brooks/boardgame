function BoardWithPlayer(player){
    Board.call(this, 8, 8);
}

BoardWithPlayer.prototype = Object.create(Board.prototype);
BoardWithPlayer.prototype.constructor = Board;
