import React, { useState } from 'react';
import Tile from '../../components/Tile';
import './styles.scss';

const Board = () => {
  const [chessboard, setChessboard] = useState([
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
  ]);
  const [occupied, setOccupied] = useState([]);

  const renderChessboard = () => {
    return chessboard.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((square, colIndex) => (
          <Tile key={`${rowIndex}-${colIndex}`} rowIndex={rowIndex} colIndex={colIndex} setOccupied={setOccupied}>{square}</Tile>
        ))}
      </div>
    ));
  };

  return (
    <div className="board">
      <h2 className='board__title'>Chess</h2>
      <div className='board__holder'>
          {renderChessboard()}
      </div>
    </div>
  )
}

export default Board