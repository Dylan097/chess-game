function setupInitialBoard(boardE1) {
    const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

    const piecePlacement = {
        1: ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
        2: Array(8).fill("pawn"),
        7: Array(8).fill("pawn"),
        8: ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]
    };

    for (let rank = 8; rank >= 1; rank--) {

        for (let file = 0; file < 8; file++) {
            const squareName = files[file] + rank;
            const square = document.createElement("div");
            square.classList.add("square");
            square.classList.add(((rank + file) % 2 === 0) ? "light":"dark");
            square.dataset.square = squareName;
            square.setAttribute("role", "img");

            const pieceDiv = document.createElement("div");
            pieceDiv.classList.add("piece");
            square.appendChild(pieceDiv);

            if (piecePlacement[rank]) {
                const piece = piecePlacement[rank][file];
                const color = (rank <= 2) ? "white" : "black";

                square.dataset.piece = piece;
                square.dataset.color = color;
                square.setAttribute("aria-label", `${color} ${piece} on ${squareName}`);
            } else {
                square.dataset.piece = "";
                square.dataset.color = "";
                square.setAttribute("aria-label", `Empty square ${squareName}`);
            }

            boardE1.appendChild(square);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
  const boardEl = document.getElementById("chessboard");
  if (!boardEl) return;

  if (document.body.classList.contains("game-page")) {
    // New game mode
    setupInitialBoard(boardEl);
  }
});