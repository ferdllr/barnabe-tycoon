"use client"
import { useState } from "react"
import {useBarStore, useBetMachine, useMoneyStore} from '../store/ItemsStore'
import './game.css'
import '../components/GameDisplay/gameDisplay.css'
import '../components/Menus/f1/f1.css'
import Shop from '../components/Menus/Shop'
import Game from '../components/Menus/Game'
import Stats from '../components/Menus/Stats'
import GameDisplay from '../components/GameDisplay/gameDisplay'
import F1 from "../components/Menus/f1/F1"

export default function Home() {
  /* hooks */
  const [menu, setMenu] = useState<JSX.Element>(<Shop></Shop>) //menu dos botoes
  const {money} = useMoneyStore() // variavel de dinheiro do jogo (ZUSTAND)
  const {betMachine} = useBetMachine()

  function betButton(){
    if(betMachine) return (<button className="betMachine-button" onClick={() => setMenu(<F1></F1>)}>aposta</button>)
    return
  }

  return (
    <main className='main'>
      <GameDisplay></GameDisplay>
      <div className="game-input-container">
        <div className='left-side'>
          <button className='left-buttons' onClick={() => setMenu(<Game></Game>)}>Game</button>
          <button className='left-buttons' onClick={() => setMenu(<Stats></Stats>)}>stats</button>
          <button className='left-buttons' onClick={() => setMenu(<Shop></Shop>)}>shop</button>
          {betButton()}
        </div>
          {menu}
        <h2>{money + 'R$'}</h2>
      </div>
    </main>
  )
  
}


