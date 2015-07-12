describe("A Board with a player", function () {
    var board = null;
    var player = null;

    beforeEach(function () {
        player = new Player();
        board = new Player8x8Board(player);
    });

    it("should contain an instance of Player", function () {
        expect(board.findPlayerInBoard() instanceof Player).toBe(true);
    });

    it("positions player at bottom left corner by default", function () {
        expect(board.getPlayerPositionY()).toBe(0);
        expect(board.getPlayerPositionX()).toBe(0);
    });


    it("can indicate a player reaching the top", function () {
        expect(typeof board.hasPlayerWon()).toBe("boolean");
    });

    it("will return true if a player reaches the top", function () {
        board.movePlayer(board.getNumberOfColumns() - 1, board.getNumberOfRows() - 1);
        expect(board.hasPlayerWon()).toBe(true);
    });

    it("will return false if a player has not reached the top", function(){
        expect(board.hasPlayerWon()).toBe(false);
    });

    afterEach(function () {
        player = null;
        board = null;
    });

});