import {create} from 'zustand'

type TableState = {
    tables: boolean[];
    addTable: () => void;
    addCostumer: (id: number) => void;
    removeCostumer: (id: number) => void;
  };

type StageState = {
  stage: boolean
  inUse: boolean
  addStage: () => void;
  useStage: () => void;
}
  
type MoneyState = {
  money: number
  addMoney: (val: number) => void;
  removeMoney: (val: number) => void;
}


  // Função que cria o store Zustand
  export const useMesaStore = create<TableState>((set) => ({
    tables: [],
    addTable: () => set((state) => ({ tables: [...state.tables, false] })),
    addCostumer: (id: number) => set((state) => ({tables: [...state.tables.slice(0, id), true, ...state.tables.slice(id + 1)]})),
    removeCostumer: (id: number) => set((state) => ({tables: [...state.tables.slice(0, id), false, ...state.tables.slice(id + 1)]}))
  }));

  export const useStageStore = create<StageState>((set) => ({
    stage: false,
    inUse: false,
    addStage: () => set((state) => ({stage: true})),
    useStage: () => set((state) => ({inUse: true})),
  }));

  export const useMoneyStore = create<MoneyState>((set) => ({
    money: 100,
    addMoney: (val: number) => set((state) => ({money: state.money + val})),
    removeMoney: (val: number) => set((state) => ({money: state.money - val})),
  }));