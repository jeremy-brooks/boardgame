describe("A Board", function () {

    var board = null;
    var boardWidth = NaN;
    var boardHeight = NaN;

    beforeEach(function () {
        boardWidth = 8;
        boardHeight = 8;
        board = new Board(boardWidth, boardHeight);
    });

    it("should have a set number of rows", function () {
        expect(board.getNumberOfRows()).toBe(boardHeight);
    });
    it("should have a set number of columns", function () {
        expect(board.getNumberOfColumns()).toBe(boardWidth);
    });

    describe("A column", function(){
        var column = null;
        it("should have a set number of available positions", function(){
            column = board.getColumn(0);
            expect(column.length).toBe(boardHeight);
        })
    });

    describe("A row", function(){
        var row = null;
        it("should have a set number of available positions", function(){
            row = board.getRow(0);
            expect(row.length).toBe(boardWidth);
        })
    });

    afterEach(function(){
        board = null;
        boardHeight = NaN;
        boardWidth = NaN;
    });
});
