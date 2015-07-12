describe("A Board with a player", function(){
    var board = null;
    var player = null;

    beforeEach(function(){
        player = new Player();
        board = new Player8x8Board(player);
    });

    it("should position the player at bottom left corner by default", function(){
        expect(board.getPlayerPosition()).toBe("col: 0, row: 0");
    })

});