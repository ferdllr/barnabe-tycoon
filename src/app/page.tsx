"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Table from './components/Table'
import Stage from './components/Stage'
import TableContainer from './components/TableContainer'
import bg from '../../public/floor.png'
import { useState } from "react"

var money = 100;

export default function Home() {
  const [TablesCount, setTablesCount] = useState(1)
  const [StageBool, createStage] = useState(false)

  function addTable(){
    if(TablesCount > 4) return;
    if (money < 30) return;
    money -=20
    setTablesCount(TablesCount + 1)
  }
  
  function addStage(){
    if (money < 60)return;

    createStage(true)
    money -=60;
  }

  return (
    <main className={styles.main}>
      <div className="game-display-container"> 
        <div className="topside-display">
          <Stage HaveStage={StageBool}></Stage>
        </div>
         <TableContainer TablesAmount={TablesCount}>

         </TableContainer>
      </div>
      <div className="game-input-container">
        <div className='left-side'>
          <button className='left-buttons'>Game</button>
          <button className='left-buttons'>shop</button>
        </div>
        <div className='main-inputs'>
        <button onClick={() =>addTable()} className='main-buttons'>+ mesa (10R$)</button>
        <button onClick={() =>addStage()} className='main-buttons'>palco(60R$)</button>
        </div>
        <h2>{money + 'R$'}</h2>
      </div>
    </main>
  )
  
}


