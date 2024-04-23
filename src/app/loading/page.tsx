"use client"

import { permanentRedirect } from 'next/navigation'
import './loading.css'
import '../components/GameDisplay/gameDisplay.css'
import {useRouter } from 'next/navigation'
import GameDisplay from '../components/GameDisplay/gameDisplay';


export default function Home() {
    const router = useRouter() //objeto para mudar as rotas do site (exemplo: de localhost:3000 para localhost:3000/game)
    function saveCheck(){
        if (typeof window !== 'undefined'){
            if(localStorage.getItem("gameSave") == null) return //verifica se o jogador possui save
                return(
                    <div>
                    <h1>voce ja tem um jogo salvo, deseja carrega-lo?</h1>
                    <GameDisplay></GameDisplay> {/* display do jogo */}
                    <button className='choice-button' onClick={() => {router.push('/game')}}>Sim</button> {/* caso o jogador não deseje reiniciar o jogo */}
                    <button className='choice-button' onClick={() => {
                        localStorage.removeItem('gameSave'); //remove o save do jogador
                        router.push('/game') //redireciona o jogador pra pagina do jogo
                        router.refresh(); //reinicia a rota do jogo
                        location.reload() //reinicia a pagina do google
                    }
    
                        }>Não</button> {/* caso o jogador deseje reiniciar o jogo */}
                </div>
                )
        }
        
        router.replace('/game') //caso o jogador não tenha nenhum save o jogador é automatimante redirecionado para o jogo e o historico é apagado
    }
    return (<main className='homepage-main'>{saveCheck()}</main>)
}