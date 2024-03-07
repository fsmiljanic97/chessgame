import React, { useEffect, useRef } from 'react'
import './styles.scss'

const Figure = ({rowIndex, tileIndex, setOccupied, children}) => {
    const buttonRef = useRef(null);

    useEffect(() => {
        setOccupied(tileIndex);
    }, [])

    const getPieceColor = (rowIndex) => {
        return (rowIndex === 1 || rowIndex === 0 ? "figure--black" : "");
    };

    const handleDragStart = (event) => {
        console.log('Drag start, tileIndex:', tileIndex);
        console.log(buttonRef.current)
        buttonRef.current.classList.add('figure--absolute');
        event.dataTransfer.setData('text/plain', tileIndex);
    };
    
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        buttonRef.current.classList.remove('figure--absolute')
        console.log('Drop tile index:', data);
    };

    return (
        <div 
        className={`figure ${getPieceColor(rowIndex)}`} 
        ref={buttonRef}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        >
            {children}
        </div>
    )
}

export default Figure