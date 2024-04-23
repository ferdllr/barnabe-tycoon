"use client"
import Table from '../components/Items/Table'
import Stage from '../components/Items/Stage'
import { useState } from "react"
import { useMesaStore, useStageStore } from '../store/ItemsStore'
import './game.css'
import Shop from '../components/Menus/Shop'
import Game from '../components/Menus/Game'
import { useMoneyStore } from '../store/MoneyStore'
import Stats from '../components/Menus/Stats'
export default function Home() {
  /* hooks */
  const [menu, setMenu] = useState<JSX.Element>(<Shop></Shop>)
  const {tables} = useMesaStore();
  const {stage,inUse} = useStageStore()
  const {money} = useMoneyStore()

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
          <button className='left-buttons' onClick={() => setMenu(<Game></Game>)}>Game</button>
          <button className='left-buttons' onClick={() => setMenu(<Stats></Stats>)}>stats</button>
          <button className='left-buttons' onClick={() => setMenu(<Shop></Shop>)}>shop</button>
        </div>
          {menu}
        <h2>{money + 'R$'}</h2>
      </div>
    </main>
  )
  
}


