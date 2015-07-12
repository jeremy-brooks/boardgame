describe("A game controller", function () {
    var player = null;
    var board = null;
    var playerLives = NaN;
    var controller = null;

    beforeEach(function(){
        playerLives = 2;
        player = new Player(playerLives);
        board = new Board8x8WithMines(player);
        controller = new GameController(board);
    });

    it("has a game board", function(){
        expect(controller.getBoard() instanceof Board).toBe(true);
        expect(controller.getBoard() instanceof Player8x8Board).toBe(true);
        expect(controller.getBoard() instanceof Board8x8WithMines).toBe(true);
    });

    it("sets a new player to the bottom left corner of the board by default", function(){
        var tempPlayer = controller.getPlayer();
        var tempBoard = controller.getBoard();
        expect(tempPlayer.getRow()).toBe(tempBoard.getPlayerPositionX());
        expect(tempPlayer.getCol()).toBe(tempBoard.getPlayerPositionY());
        tempPlayer = null;
        tempBoard = null;
    });

    it("can move a player up 1 coordinate", function(){
        expect(controller.getPlayer().getRow()).toBe(0);
        controller.movePlayerUp();
        expect(controller.getPlayer().getRow()).toBe(1);
    });

    beforeEach(function(){
        playerLives = NaN;
        player = null;
        board = null;
    });
});