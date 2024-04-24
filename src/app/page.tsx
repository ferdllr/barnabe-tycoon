
'use client'
import {useRouter } from 'next/navigation'
import './homepage.css'
export default function Home() {
    const router = useRouter()
    return (
        <main className='homepage-main'>
            <div className='main-menu'>
                <h1 className='main-title'>Barnabé<br />tycoon</h1>
                <button className='play-input' onClick={() => router.push('/loading')}>Jogar</button> {/* botao para redirecionar a tela de loading */}
            </div>
        </main>
      )
}