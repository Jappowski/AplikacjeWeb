var Grid = (function () {
    function Grid() {
        this.cells = new Array();
        for (var i = 0; i < 9; i++) {
            var htmlCell = document.getElementById("cell" + (i + 1));
            var cell = new Cell(this, i, htmlCell);
            this.cells.push(cell);
        }
    }
    Grid.prototype.CheckWin = function () {
        // horizontal check
        for (var i = 0; i < 3; i++) {
            var cell1_1 = this.cells[i].content;
            var cell2_1 = this.cells[i + 3].content;
            var cell3_1 = this.cells[i + 6].content;
            if (cell1_1 === cell2_1 && cell2_1 === cell3_1 && cell1_1 != CellContent.Empty) {
                return true;
            }
        }
        // vertical check
        for (var i = 0; i < 3; i++) {
            var cell1_2 = this.cells[i * 3].content;
            var cell2_2 = this.cells[i + 3 + 1].content;
            var cell3_2 = this.cells[i + 3 + 2].content;
            if (cell1_2 === cell2_2 && cell2_2 === cell3_2 && cell1_2 != CellContent.Empty) {
                return true;
            }
        }
        // diagonal check
        var cell1 = this.cells[0].content;
        var cell2 = this.cells[4].content;
        var cell3 = this.cells[8].content;
        if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
            return true;
        }
        cell1 = this.cells[3].content;
        cell2 = this.cells[4].content;
        cell3 = this.cells[6].content;
        if (cell1 === cell2 && cell2 === cell3 && cell1 != CellContent.Empty) {
            return true;
        }
        return false;
    };
    return Grid;
})();
var Cell = (function () {
    function Cell(grid, index, htmlElement) {
        var _this = this;
        this.grid = grid;
        this.index = index;
        this.content = CellContent.Empty;
        this.htmlElement = htmlElement;
        this.htmlElement.onclick = function () { return _this.HandleClick(); };
    }
    Cell.prototype.HandleClick = function () {
        if (this.content == CellContent.Empty) {
            if (turn === Turn.Player1) {
                this.htmlElement.innerHTML = "O";
                this.content = CellContent.Circle;
            }
            else {
                this.htmlElement.innerHTML = "X";
                this.content = CellContent.Cross;
            }
            SwitchTurn(turn);
            var win = this.grid.CheckWin();
            if (win === true) {
                alert("Winner: " + turn);
            }
        }
    };
    return Cell;
})();
var CellContent;
(function (CellContent) {
    CellContent[CellContent["Empty"] = 1] = "Empty";
    CellContent[CellContent["Cross"] = 2] = "Cross";
    CellContent[CellContent["Circle"] = 4] = "Circle";
})(CellContent || (CellContent = {}));
var Turn;
(function (Turn) {
    Turn[Turn["Player1"] = 0] = "Player1";
    Turn[Turn["Player2"] = 1] = "Player2"; // cross
})(Turn || (Turn = {}));
var turn = Turn.Player1;
window.onload = function () {
    var grid = new Grid();
};
function SwitchTurn(currentTurn) {
    if (currentTurn === Turn.Player1)
        turn = Turn.Player2;
    else
        turn = Turn.Player1;
}
