import {create} from 'zustand'
type MoneyState = {
    money: number
    addMoney: (val: number) => void;
    removeMoney: (val: number) => void;
    setMoney: (val: number) => void;
  }

  export const useMoneyStore = create<MoneyState>((set) => ({
    money: getSave(),
    addMoney: (val: number) => set((state) => ({money: state.money + val})),
    removeMoney: (val: number) => set((state) => ({money: state.money - val})),
    setMoney: (val: number) => set(({money: val})),
  }));

  function getSave(){
    const storage = localStorage.getItem("gameSave")
    if (storage != undefined) return JSON.parse(storage).money
    return 100
  }