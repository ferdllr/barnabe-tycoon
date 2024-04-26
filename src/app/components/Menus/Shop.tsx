	
import React from 'react';
import {useMoneyStore, useMesaStore, useStageStore, useBarStore, useChairStore } from '../../store/ItemsStore';


 
	
interface params {
}
	
enum ItemType {
  TABLE,
  COSMETIC,
  CHAIR
}
	
const Shop = (values: params)
	
: React.ReactNode => {
    //importando variaveis do zustand
    const {addTable, tables} = useMesaStore();
    const {addStage} = useStageStore()
    const {money, removeMoney} = useMoneyStore()
    const {reputation, setReputation} = useBarStore()
    const {chairs, addChair} = useChairStore()

    function buyItem(price: number, func: () => void, itemType: ItemType, rep: number){ //função de comprar item, onde você define o preço e a função para adicionar ele no jogo  
      if (money < price) return
      if (itemType == ItemType.TABLE && tables.length >= 8)return
      if (itemType == ItemType.CHAIR && chairs.length >= 3)return
      setReputation(reputation + rep)
      removeMoney(price)
      func()
      }
    return (<div className="main-inputs">
      <h4>utilitarios:</h4>
      <div className='itens-row'>
      <button className='main-buttons' onClick={() => buyItem(30, addTable, ItemType.TABLE, 0.3)}>Mesa | 30R$</button>
      <button className='main-buttons' onClick={() => buyItem(10, addChair, ItemType.CHAIR, 0.1)}>Cadeira | 10R$</button>
      </div>
      <h4>cosmeticos:</h4>
      <div className='itens-row'>
      <button className='main-buttons' onClick={() => buyItem(60, addStage, ItemType.COSMETIC, 3)}>Palco | 60R$</button>
      </div>
    
    
  </div>)
	
}
	
 
	
 
	
export default Shop;