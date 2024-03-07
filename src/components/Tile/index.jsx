import React, { useEffect } from 'react';
import './styles.scss';
import Figure from '../Figure';

const Tile = ({rowIndex, colIndex, setOccupied, children}) => {
	const tileIndex = rowIndex.toString() + colIndex.toString();
	const getColor = (rowIndex, colIndex) => {
		return (rowIndex + colIndex) % 2 === 0 ? "" : "tile--black";
	};
	const checkIfOccupied = function() {
		return children ? "tile--occupied" : ""; 
	}

	return (
		<div className={`tile ${getColor(rowIndex, colIndex)} ${checkIfOccupied()}`}>
			<Figure rowIndex={rowIndex} tileIndex={tileIndex} setOccupied={setOccupied}>{children}</Figure>
		</div>
	)
}

export default Tile