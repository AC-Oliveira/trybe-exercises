let chessPiece = 'Xablau'
chessPiece = chessPiece.toUpperCase()
switch (chessPiece){
  case 'KING':
    console.log('Kings move one square in any direction, so long as that square is not attacked by an enemy piece.');
    break;
  case 'QUEEN':
    console.log('Queens move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.');
    break;
  case 'ROOK':
    console.log('Rooks move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.');
    break;
  case 'BISHOP':
    console.log('Bishops move diagonally any number of squares. They are unable to jump over pieces.');
    break;
  case 'KNIGHT':
  console.log('Knights move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.');
  break;
  case 'PAWN':
    console.log('Pawns move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. Pawns capture one square diagonally in a forward direction.Pawns are unable to move backward on captures or moves. Upon reaching the other side of the board a pawn promotes into any other piece, except for a king. Additionally, pawns can make a special move named En Passant.');
    break;
  default:
      console.log('Piece not encountered; try King, Queen, Rook, Bishop, Knight or Pawn.')
      break;
}