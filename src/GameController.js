function GameController(board) {
    this._gameBoard = board;
};

GameController.prototype.getBoard = function(){
    return this._gameBoard;
};

GameController.prototype.getPlayer = function(){
    return this.getBoard().findPlayerInBoard();
};

GameController.prototype.movePlayerUp = function () {
    var currentPosition = this.getPlayer().getPosition();
    this.getBoard().movePlayer(currentPosition[0]+=1, currentPosition[1]);
};