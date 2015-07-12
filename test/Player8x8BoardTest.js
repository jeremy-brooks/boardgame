describe("A Board with a player", function(){
    var board = null;
    var player = null;

    beforeEach(function(){
        player = new Player();
        board = new Player8x8Board(player);
    });

    it("should contain an instance of Player", function(){
        expect(board.findPlayerInBoard() instanceof Player).toBe(true);
    });

    it("positions player at bottom left corner by default", function(){
        expect(board.getPlayerPositionY()).toBe(0);
        expect(board.getPlayerPositionX()).toBe(0);
    });

});