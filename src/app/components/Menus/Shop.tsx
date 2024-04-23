	
import React from 'react';
import {useMoneyStore, useMesaStore, useStageStore } from '../../store/ItemsStore';


 
	
interface params {
}
	

	
const Shop = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {addTable, tables} = useMesaStore();
    const {addStage} = useStageStore()
    const {money, removeMoney} = useMoneyStore()

    function buyItem(price: number, func: () => void){ //função de comprar item, onde você define o preço e a função para adicionar ele no jogo
        if (money < price) return
        removeMoney(price)
        func()
      }
    
    function tableCheck(){ //função para checar se chegou no total de mesas
      if(tables.length >= 8) return
      buyItem(20, addTable)
    }
    return (<div className="main-inputs">
    <button className='main-buttons' onClick={() => buyItem(60, addStage)}>palco (60R$)</button>
    <button className='main-buttons' onClick={() => tableCheck()}>mesa (20R$)</button>
  </div>)
	
}
	
 
	
 
	
export default Shop;