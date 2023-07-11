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
    { unicode: constatns.WHITE.ROOK, name: constatns.ROOK },
    { unicode: constatns.WHITE.KNIGHT, name: constatns.KNIGHT },
    { unicode: constatns.WHITE.BISHOP, name: constatns.BISHOP },
    { unicode: constatns.WHITE.QUEEN, name: constatns.QUEEN },
    { unicode: constatns.WHITE.KING, name: constatns.KING },
    { unicode: constatns.WHITE.BISHOP, name: constatns.BISHOP },
    { unicode: constatns.WHITE.KNIGHT, name: constatns.KNIGHT },
    { unicode: constatns.WHITE.ROOK, name: constatns.ROOK },
  ].map((item: any) => ({ ...item, type: constatns.TYPE.WHITE })),
  BLACK: [
    { unicode: constatns.BLACK.ROOK, name: constatns.ROOK },
    { unicode: constatns.BLACK.KNIGHT, name: constatns.KNIGHT },
    { unicode: constatns.BLACK.BISHOP, name: constatns.BISHOP },
    { unicode: constatns.BLACK.KING, name: constatns.KING },
    { unicode: constatns.BLACK.QUEEN, name: constatns.QUEEN },
    { unicode: constatns.BLACK.BISHOP, name: constatns.BISHOP },
    { unicode: constatns.BLACK.KNIGHT, name: constatns.KNIGHT },
    { unicode: constatns.BLACK.ROOK, name: constatns.ROOK },
  ].map((item: any) => ({ ...item, type: constatns.TYPE.BLACK })),
};

export default constatns;
