	
import React from 'react';
import Table from '../Items/Table';
import Stage from '../Items/Stage';
import { useMesaStore, useStageStore } from '@/app/store/ItemsStore';

 
	
interface params {
}
 
	
const GameDisplay = (values: params)
	
: React.ReactNode => {
    const {tables} = useMesaStore();
    const {stage, inUse} = useStageStore()

    return (
    <div className="game-display-container"> 
        <div className="topside-display">
            {stage ? <Stage HasBand={inUse}></Stage>: null}
        </div>
        <div className='table-container'>
            {tables.map((isFull, index) => (
            <Table key={index} isFull={isFull} />
            ))}
        </div>
    </div>)
	
}
	
 
	
 
	
export default GameDisplay;