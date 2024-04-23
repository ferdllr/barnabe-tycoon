
'use client'
import { useRouter } from 'next/navigation'
import './homepage.css'
import { useState } from 'react';
import Shop from './components/Menus/Shop';
import { useMesaStore, useStageStore } from './store/ItemsStore';
import { useMoneyStore } from './store/MoneyStore';
export default function Home() {
    const [feedback, setFeedback] = useState<string>("selecione uma opção!")
    function loadGame(){
        if(localStorage.getItem("gameSave") == null){
            setFeedback("você nao possui um save")
            return
        }
        router.push('/game')
    }

    const router = useRouter()
    return (
        <main className='homepage-main'>
            <div className='main-menu'>
                <h1 className='main-title'>Barnabé<br />tycoon</h1>
                <button className='play-input' onClick={() => router.replace('/newgame')}>Novo jogo</button>
                <button className='play-input' onClick={() => loadGame()}>continuar</button>
                <h4>{feedback}</h4>
            </div>
        </main>
      )
}