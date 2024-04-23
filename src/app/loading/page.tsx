"use client"

import { permanentRedirect } from 'next/navigation'
import './loading.css'
import '../components/GameDisplay/gameDisplay.css'
import {useRouter } from 'next/navigation'
import GameDisplay from '../components/GameDisplay/gameDisplay';


export default function Home() {
    const router = useRouter()
    function saveCheck(){
        if (typeof window === 'undefined') return
        if(localStorage.getItem("gameSave") != null){
            return(<main className='homepage-main'>
                <div>
                <h1>voce ja tem um jogo salvo, deseja carrega-lo?</h1>
                <GameDisplay></GameDisplay>
                <button className='choice-button' onClick={() => {router.push('/game')}}>s</button>
                <button className='choice-button' onClick={() => {
                    localStorage.removeItem('gameSave');
                    router.push('/game')
                    router.refresh();
                    location.reload()}

                    }>n</button>
            </div>
            </main>)
        }
        permanentRedirect('/game')
    }
    return (<div>{saveCheck()}</div>)
}