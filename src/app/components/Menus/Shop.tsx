	
import React, { useState } from 'react';
import {useMoneyStore, useMesaStore, useStageStore, useBarStore, useChairStore, useBetMachine } from '../../store/ItemsStore';


 
	
interface params {
}
	
enum ItemType {
  TABLE,
  COSMETIC,
  CHAIR,
}
	
const Shop = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {addTable, tables} = useMesaStore();
    const {addStage} = useStageStore()
    const {money, removeMoney} = useMoneyStore()
    const {reputation, setReputation} = useBarStore()
    const {chairs, addChair} = useChairStore()
    const {betMachine, addBetMachine} = useBetMachine()
    const [tableCost, setTableCost] = useState(30)
    const [chairCost, setChairCost] = useState(10)

    function buyItem(price: number, func: () => void, itemType: ItemType, rep: number){ //função de comprar item, onde você define o preço e a função para adicionar ele no jogo  
      if (money < price) return
      if (itemType == ItemType.TABLE){
        if(tables.length >= 8) return
        setTableCost(tableCost + (tables.length + 1) * 20)
      }
      if (itemType == ItemType.CHAIR){
        if(chairs.length >= 3) return
        setChairCost(chairCost + (chairs.length + 1) * 10)
      }
      setReputation(reputation + rep)
      removeMoney(price)
      func()
      }
    return (<div className="main-inputs">
      <h4>utilitarios:</h4>
      <div className='itens-row'>
      <button className='main-buttons' onClick={() => buyItem(tableCost, addTable, ItemType.TABLE, 0.3)}>Mesa | {tableCost}R$</button>
      <button className='main-buttons' onClick={() => buyItem(chairCost, addChair, ItemType.CHAIR, 0.1)}>Cadeira | {chairCost}R$</button>
      </div>
      <h4>cosmeticos:</h4>
      <div className='itens-row'>
      <button className='main-buttons' onClick={() => buyItem(60, addStage, ItemType.COSMETIC, 2)}>Palco | 60R$</button>
      <button className='main-buttons' onClick={() => buyItem(200, addBetMachine, ItemType.COSMETIC, 3)}>caçaníquel|200R$</button>
      </div>
    
    
  </div>)
	
}
	
 
	
 
	
export default Shop;