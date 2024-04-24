	
import React from 'react';
import {useMoneyStore, useMesaStore, useStageStore, useBarStore } from '../../store/ItemsStore';


 
	
interface params {
}
	
enum ItemType {
  TABLE,
  COSMETIC
}
	
const Shop = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {addTable, tables} = useMesaStore();
    const {addStage} = useStageStore()
    const {money, removeMoney} = useMoneyStore()
    const {reputation, setReputation} = useBarStore()

    function buyItem(price: number, func: () => void, itemType: ItemType){ //função de comprar item, onde você define o preço e a função para adicionar ele no jogo  
      if (money < price) return
      if (itemType = ItemType.TABLE && tables.length >= 8)return
      setReputation(reputation + 1)
      removeMoney(price)
      func()
      }
    return (<div className="main-inputs">
    <button className='main-buttons' onClick={() => buyItem(60, addStage, ItemType.COSMETIC)}>Palco | 60R$</button>
    <button className='main-buttons' onClick={() => buyItem(20, addTable, ItemType.TABLE)}>Mesa | 20R$</button>
  </div>)
	
}
	
 
	
 
	
export default Shop;