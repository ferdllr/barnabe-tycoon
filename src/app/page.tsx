
'use client'
import { redirect, RedirectType, useRouter } from 'next/navigation'
import './homepage.css'
import { useState } from 'react';
import Shop from './components/Menus/Shop';
import { useMesaStore, useStageStore } from './store/ItemsStore';
import { useMoneyStore } from './store/MoneyStore';
export default function Home() {
    const router = useRouter()
    return (
        <main className='homepage-main'>
            <div className='main-menu'>
                <h1 className='main-title'>Barnabé<br />tycoon</h1>
                <button className='play-input' onClick={() => router.push('/loading')}>Jogar</button>
            </div>
        </main>
      )
}