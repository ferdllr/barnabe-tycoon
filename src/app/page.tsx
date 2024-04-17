"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Table from './components/Table'
import Stage from './components/Stage'
import bg from '../../public/floor.png'
import { useState } from "react"

var money = 100;
export default function Home() {
  const [mainInput, changeInputsCat] = useState(1)
  const [tables, setTables] = useState<JSX.Element[]>([]);
  const [StageBool, createStage] = useState(false)
  function addTable(){
    if(tables.length == 4) return
    const newTable = <Table key={tables.length}/>;
    setTables([...tables, newTable]);
  }
  
  function addStage(){
    if (money < 60)return;

    createStage(true)
    money -=60;
  }

  function mainInputs(){
    if (mainInput == 1) return (<div className="main-inputs">
      <button className='main-buttons' onClick={() => addStage()}>palco (60R$)</button>
      <button className='main-buttons' onClick={() => addTable()}>mesa (20R$)</button>
    </div>)
    return (<div className="main-inputs">
      <button className='main-buttons'>atender</button>
      <button className='main-buttons'>fechar</button>
      <button className='main-buttons'>cliente</button>
    </div>)
  }

  return (
    <main className={styles.main}>
      <div className="game-display-container"> 
        <div className="topside-display">
          <Stage HaveStage={StageBool}></Stage>
        </div>
        <div className='table-container'>
          {tables}
        </div>
      </div>
      <div className="game-input-container">
        <div className='left-side'>
          <button className='left-buttons' onClick={() => changeInputsCat(0)}>Game</button>
          <button className='left-buttons' onClick={() => changeInputsCat(1)}>shop</button>
        </div>
          {mainInputs()}
        <h2>{money + 'R$'}</h2>
      </div>
    </main>
  )
  
}


