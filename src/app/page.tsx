
'use client'
import {useRouter } from 'next/navigation'
import './homepage.css'
export default function Home() {
    const router = useRouter()
    return (
        <main className='homepage-main'>
            <div className='main-menu'>
                <img src='button.png' className='play-input' onClick={() => {router.push('/loading'); location.reload()} }></img> {/* botao para redirecionar a tela de loading */}
            </div>
        </main>
      )
}