	
import React from 'react';
import { useMesaStore, useMoneyStore, useStageStore } from '../../store/ItemsStore';

 
	
interface params {
}
	

	
const Shop = (values: params)
	
: React.ReactNode => {
    const {addTable} = useMesaStore();
    const {addStage} = useStageStore()
    const {money, removeMoney} = useMoneyStore()

    function buyItem(price: number, func: () => void){
        if (money < price) return
        removeMoney(price)
        func()
      }

    return (<div className="main-inputs">
    <button className='main-buttons' onClick={() => buyItem(60, addStage)}>palco (60R$)</button>
    <button className='main-buttons' onClick={() => buyItem(20, addTable)}>mesa (20R$)</button>
  </div>)
	
}
	
 
	
 
	
export default Shop;