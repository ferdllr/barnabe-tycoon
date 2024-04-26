	
import React from 'react';
import Table from '../Items/Table';
import Stage from '../Items/Stage';
import { useMesaStore, useStageStore, useChairStore } from '@/app/store/ItemsStore';
import Chair from '../Items/chair';

 
	
interface params {
}
 
	
const GameDisplay = (values: params)
	
: React.ReactNode => {
    const {tables} = useMesaStore();
    const {stage, inUse} = useStageStore()
    const {chairs} = useChairStore()

    return (
    <div className="game-display-container"> 
        <div className="topside-display">
            {stage ? <Stage HasBand={inUse}></Stage>: null}
        </div>
        <div className='middleside-display'>
            <div className='chairs-container'>
            {chairs.map((isFull, index) => (
                <Chair key={index} isFull={isFull} />
                ))}
            </div>
            <div className='table-container'>
                {tables.map((isFull, index) => (
                <Table key={index} isFull={isFull} />
                ))}
            </div>
        </div>
    </div>)
	
}
	
 
	
 
	
export default GameDisplay;