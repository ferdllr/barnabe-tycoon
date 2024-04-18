"use client"
import Table from '../components/Table'
import Stage from '../components/Stage'
import { useState } from "react"
import { useMesaStore, useMoneyStore, useStageStore } from '../store/ItemsStore'
import './game.css'
export default function Home() {


  /* hooks */
  const [inputs, setInputs] = useState(1)
  const {tables, addTable, addCostumer, removeCostumer} = useMesaStore();
  const {stage, addStage, inUse, useStage} = useStageStore()
  const {money, addMoney, removeMoney} = useMoneyStore()


  /*player stats*/


  /* funções */

  function buyItem(price: number, func: () => void){
    if (money < price) return
    removeMoney(price)
    func()
  }

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

  function mainInputs(){
    if (inputs == 1) return (<div className="main-inputs">
      <button className='main-buttons' onClick={() => buyItem(60, addStage)}>palco (60R$)</button>
      <button className='main-buttons' onClick={() => buyItem(20, addTable)}>mesa (20R$)</button>
    </div>)
    return (<div className="main-inputs">
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
  
  /*JSX do site*/
  return (
    <main className='main'>
      <div className="game-display-container"> 
        <div className="topside-display">
        {stage ? <Stage HasBand={inUse}></Stage>: null}
        </div>
        <div className='table-container'>
        {tables.map((isFull, index) => (
          <Table key={index} isFull={isFull} />
        ))}
        </div>
      </div>
      <div className="game-input-container">
        <div className='left-side'>
          <button className='left-buttons' onClick={() => setInputs(0)}>Game</button>
          <button className='left-buttons' onClick={() => setInputs(1)}>shop</button>
        </div>
          {mainInputs()}
        <h2>{money + 'R$'}</h2>
      </div>
    </main>
  )
  
}


