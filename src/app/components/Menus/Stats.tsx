	
import {useMoneyStore, useMesaStore, useStageStore } from '@/app/store/ItemsStore';
import React from 'react';

 
	
interface params {
}
	
 
	
const Stats = (values: params)
	
: React.ReactNode => {

    const {tables} = useMesaStore();
    const {money} = useMoneyStore()
    const {stage} = useStageStore()


    function setSave(){
        const save = JSON.stringify({"tables": tables, "money": money, "stage": stage})
        localStorage.setItem("gameSave", save);
    }


    return (
    <div className="main-inputs">
        <h2>Status do jogador:</h2>
        <h4>dinheiro: {money}</h4>
        <h4>mesas: {tables.length}</h4>
        <h4>palco: {stage}</h4>
        <div>
            <button onClick={() => setSave()}>salvar jogo</button>
        </div>
    </div>)
	
}
	
 
	
 
	
export default Stats;