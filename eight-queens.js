function solveNQueens(queenNumber) {
  const solutions = [];
  const colPosQueens = [];

  function isSafe(row, col) {
    for (let prevRow = 0; prevRow < row; prevRow++) {
      // Attacked by other queens
      if (colPosQueens[prevRow] === col || Math.abs(colPosQueens[prevRow] - col) === row - prevRow) {
        return false;
      }
    }
    return true;
  }

  function printQueens(colPosByRow) {
    const output = [];

    if (colPosByRow.length !== queenNumber) {
      console.log('Program Error');
      return;
    }

    for (let row = 0; row < queenNumber; row++) {
      const rowOutput = [];
      for (let col = 0; col < queenNumber; col++) {
        if (colPosByRow[row] === col) {
          rowOutput.push('Q');
        } else {
          rowOutput.push('.');
        }
      }
      output.push(rowOutput);
    }

    return output
  }

  function placeNextQueen(row) {
    // All queens are placed safely
    if (row === queenNumber) {
      solutions.push(printQueens(colPosQueens));
      // solutions.push([...colPosQueens])
      return;
    }

    // Check each column one by one to see if it is safe
    for (let col = 0; col < queenNumber; col++) {
      if (isSafe(row, col)) {
        colPosQueens[row] = col;
        placeNextQueen(row + 1);
      }
    }
  }

  // Start from row 0
  placeNextQueen(0);

  return solutions;
}