	
import { useMesaStore, useMoneyStore, useStageStore } from '@/app/store/ItemsStore';
import React from 'react';

 
	
interface params {
}
	
 
	
const Game = (values: params)
	
: React.ReactNode => {

    const {tables, addCostumer, removeCostumer} = useMesaStore();
    const {addMoney} = useMoneyStore()


    function createCostumer(){
        console.log(tables)
        const randomNum = Math.floor(Math.random() * tables.length);
        if (tables[randomNum]) return
        addCostumer(randomNum)
        
      }
    
      function helpCustomer(val: number){
        if(!tables[val]) return
        removeCostumer(val)
        console.log("mesa: " + tables)
        addMoney(20)
      }


    return (
    <div className="main-inputs">
        <button className='main-buttons-fechar'>fechar</button>
        <h4>atender clientes:</h4>
        <div>
        {tables.map((isFull, index) => (
            <button key={index} onClick={() => helpCustomer(index)}>
                Mesa {index + 1}
            </button>
            ))}
        </div>
        <button onClick={createCostumer}> gerar cliente</button> 
    </div>)
	
}
	
 
	
 
	
export default Game;