describe("A Player", function(){

    var player = null;
    var lives = NaN;

    beforeEach(function(){
        lives = 2;
        player = new Player(lives);
    });

    it("should start at the bottom left corner", function(){
        expect(player.getRow()).toBe(0);
        expect(player.getCol()).toBe(0);
    });

    it("by default has not hit any mines", function () {
        expect(player.getMineHits()).toBe(0);
    });

    it("if they hit 1 mine then 1 life is removed", function(){
        player.absorbMineHit();
        expect(player.getLives()).toBe(lives-1);
    });

    it("if total mine hits is equal to total lives had, then player has 0 lives left", function () {
        player.absorbMineHit();
        player.absorbMineHit();
        expect(player.getLives()).toBe(0);
    });

    afterEach(function () {
        player = null;
        lives = NaN;
    });
});