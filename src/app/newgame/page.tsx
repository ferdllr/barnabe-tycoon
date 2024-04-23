"use client"

import { useRouter } from 'next/navigation'
import { useMesaStore, useStageStore } from "../store/ItemsStore";
import { useMoneyStore } from "../store/MoneyStore";

export default function Home() {
    const {setTable} = useMesaStore();
    const {setMoney} = useMoneyStore()
    const {setStage} = useStageStore()
    const router = useRouter()
    localStorage.removeItem('gameSave')
    setTable([])
    setMoney(20)
    setStage(false)
    router.replace('/game')
}