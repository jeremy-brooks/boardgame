describe("A Player", function(){

    var player = null;

    beforeEach(function(){
        player = new Player();
    });

    it("should start at the bottom left corner", function(){
        expect(player.getRow()).toBe(0);
        expect(player.getCol()).toBe(0);
    });
});