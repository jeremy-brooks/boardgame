describe("A Board with mines", function(){
    var board = null;
    var player = null;

    beforeEach(function(){
        player = new Player();
        board = new Board8x8WithMines(player);
    });

    it("should contain an instance of Player", function(){
        expect(board.findPlayerInBoard() instanceof Player).toBe(true);
    });

    it("contains mines", function(){
        expect(board.getMineCount()).not.toBe(0);
    });

    afterEach(function(){
        player = null;
        board = null;
    });
});