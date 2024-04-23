"use client"
import { useState } from "react"
import {useMoneyStore} from '../store/ItemsStore'
import './game.css'
import '../components/GameDisplay/gameDisplay.css'
import Shop from '../components/Menus/Shop'
import Game from '../components/Menus/Game'
import Stats from '../components/Menus/Stats'
import GameDisplay from '../components/GameDisplay/gameDisplay'

export default function Home() {
  /* hooks */
  const [menu, setMenu] = useState<JSX.Element>(<Shop></Shop>)
  const {money} = useMoneyStore()

  return (
    <main className='main'>
      <GameDisplay></GameDisplay>
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


