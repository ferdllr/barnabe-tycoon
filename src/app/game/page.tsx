"use client"
import Table from '../components/Table'
import Stage from '../components/Stage'
import { useState } from "react"
import './game.css'
export default function Home() {


  /* hooks */
  const [inputs, setInputs] = useState(1)
  const [tables, setTables] = useState<boolean[]>([]);
  const [stage, setStage] = useState<boolean[]>([])
  const [money, setMoney] = useState(100);


  /*player stats*/


  /* funções */
  function addTable(){
    if(tables.length == 4) return
    if (money < 20) return
    setTables(prevTables => [...prevTables, false]);
    setMoney(money - 20);
  }
  
  function addStage(){
    if (stage.length != 0) return; 
    if (money < 60)return;
    setStage([false])
    setMoney(money - 60);
  }

  function createCostumer(){
    console.log(tables)
    const randomNum = Math.floor(Math.random() * tables.length);
    if (tables[randomNum]) return
    setTables(prevTables => {
      const newTables = [...prevTables]
      newTables[randomNum] = true
      return newTables
    })
    
  }

  function helpCustomer(val: number){
    if(!tables[val]) return
    setTables(prevTables => {
      const newTables = [...prevTables];
      newTables[val] = false;
      return newTables;
    })
    console.log("mesa: " + tables)
    setMoney(money + 20)
  }

  function mainInputs(){
    if (inputs == 1) return (<div className="main-inputs">
      <button className='main-buttons' onClick={() => addStage()}>palco (60R$)</button>
      <button className='main-buttons' onClick={() => addTable()}>mesa (20R$)</button>
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
      <button onClick={() => createCostumer()}> gerar cliente</button>
      
    </div>)
  }
  
  /*JSX do site*/
  return (
    <main className='main'>
      <div className="game-display-container"> 
        <div className="topside-display">
        {stage.map((HasBand, index) => (
          <Stage key={index} HasBand={stage[0]} />
        ))}
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


