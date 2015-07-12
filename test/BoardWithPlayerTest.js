describe("A Board with a player", function(){
    var board = null;
    var player = null;

    beforeEach(function(){
        player = new Player();
        board = new BoardWithPlayer(player);
    });

    it("should position the player at bottom left corner by default", function(){
        expect(board.getPlayerPosition()).toBe("0,0");
    })

});