"use client"

import './loading.css'
import '../components/GameDisplay/gameDisplay.css'
import {useRouter } from 'next/navigation'
import GameDisplay from '../components/GameDisplay/gameDisplay';
import { useEffect, useState } from 'react';


export default function Home() {
    const [page, setPage] = useState<JSX.Element>(<div></div>)

    const router = useRouter();

    useEffect(() => {
        const saveCheck = () => {
            if (typeof window !== 'undefined' && localStorage.getItem("gameSave") !== null){
                setPage(<div>
                    <h1>Você já tem um jogo salvo, deseja carregá-lo?</h1>
                    <GameDisplay></GameDisplay> {/* display do jogo */}
                    <button className='choice-button' onClick={() => {router.push('/game')}}>Sim</button> {/* caso o jogador não deseje reiniciar o jogo */}
                    <button className='choice-button' onClick={() => {
                        localStorage.removeItem('gameSave'); //remove o save do jogador
                        router.replace('/game') //redireciona o jogador pra pagina do jogo
                        location.reload()}}>Não</button> {/* caso o jogador deseje reiniciar o jogo */}
                    </div>)
                return
            }
            router.replace('/game')
        };

        saveCheck(); // Chama a função de verificação após a renderização inicial do componente
    }, [router]);

    return(<main className='homepage-main'>{page}</main>)
}