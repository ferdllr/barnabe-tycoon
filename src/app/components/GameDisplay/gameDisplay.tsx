	
import React from 'react';
import Table from '../Items/Table';
import Stage from '../Items/Stage';
import { useMesaStore, useStageStore, useChairStore, useBetMachine } from '@/app/store/ItemsStore';
import Chair from '../Items/chair';
import BetMachine from '../Items/betMachine/BetMachine';
 
	
interface params {
}
 
	
const GameDisplay = (values: params)
	
: React.ReactNode => {
    const {tables} = useMesaStore();
    const {stage, inUse} = useStageStore()
    const {chairs} = useChairStore()
    const {betMachine} = useBetMachine()

    return (
    <div className="game-display-container"> 
        <div className="topside-display">
            {betMachine ? <BetMachine></BetMachine>: null}
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