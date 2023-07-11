const constatns: any = {
  KING: "king",
  ROOK: "rook",
  KNIGHT: "knight",
  QUEEN: "queen",
  BISHOP: "bishop",
  PAWN: "pawn",
  TYPE: {
    WHITE: "white",
    BLACK: "black",
  },
  WHITE: {
    KING: "&#9812;",
    ROOK: "&#9814;",
    KNIGHT: "&#9816;",
    QUEEN: "&#9813;",
    BISHOP: "&#9815;",
    PAWN: "&#9817;",
  },
  BLACK: {
    KING: "&#9818;",
    ROOK: "&#9820;",
    KNIGHT: "&#9822;",
    QUEEN: "&#9819;",
    BISHOP: "&#9821;",
    PAWN: "&#9823;",
  },
};
constatns.STARTINGPOSITIONS = {
  WHITE: [
    constatns.WHITE.ROOK,
    constatns.WHITE.KNIGHT,
    constatns.WHITE.BISHOP,
    constatns.WHITE.QUEEN,
    constatns.WHITE.KING,
    constatns.WHITE.BISHOP,
    constatns.WHITE.KNIGHT,
    constatns.WHITE.ROOK,
  ],
  BLACK: [
    constatns.BLACK.ROOK,
    constatns.BLACK.KNIGHT,
    constatns.BLACK.BISHOP,
    constatns.BLACK.KING,
    constatns.BLACK.QUEEN,
    constatns.BLACK.BISHOP,
    constatns.BLACK.KNIGHT,
    constatns.BLACK.ROOK,
  ],
};

export default constatns;
