
import { create } from 'zustand';

type TableState = {
  tables: boolean[];
  addTable: () => void;
  resetTable: () => void;
  addCostumer: (id: number) => void;
  removeCostumer: (id: number) => void;
};

type MoneyState = {
  money: number;
  addMoney: (val: number) => void;
  removeMoney: (val: number) => void;
  setMoney: (val: number) => void;
};

type StageState = {
  stage: boolean;
  inUse: boolean;
  addStage: () => void;
  useStage: () => void;
  resetStage: () => void;
};

type BarState = {
  open: boolean;
  reputation: number;
  setOpen:(val: boolean) => void;
  setReputation: (val: number) => void;
}

export const useBarStore = create<BarState>((set) => ({
  open: false,
  reputation: 0,
  setOpen: (val: boolean) => set((state) => ({open: val})),
  setReputation: (val: number) => set((state) => ({reputation: val}))
}))

export const useMesaStore = create<TableState>((set) => ({
  tables: [],
  addTable: () => set((state) => ({ tables: [...state.tables, false] })),
  resetTable: () => set({ tables: [] }),
  addCostumer: (id: number) =>
    set((state) => ({
      tables: [...state.tables.slice(0, id), true, ...state.tables.slice(id + 1)],
    })),
  removeCostumer: (id: number) =>
    set((state) => ({
      tables: [...state.tables.slice(0, id), false, ...state.tables.slice(id + 1)],
    })),
}));

export const useStageStore = create<StageState>((set) => ({
  stage: false,
  inUse: false,
  resetStage: () => set({ stage: false, inUse: false }),
  addStage: () => set({ stage: true }),
  useStage: () => set({ inUse: true }),
}));

export const useMoneyStore = create<MoneyState>((set) => ({
  money: 200,
  addMoney: (val: number) => set((state) => ({ money: state.money + val })),
  removeMoney: (val: number) => set((state) => ({ money: state.money - val })),
  setMoney: (val: number) => set({ money: val }),
}));

function getData(){
  var storage = { money: 20, tables: [], stage: false, reputation: 0 }
  if (typeof window != 'undefined'){
    storage = JSON.parse(localStorage.getItem("gameSave") || '{ "money": 20, "tables": [], "stage": false , "reputation": 0}')
  }
  
  return storage
}

useMesaStore.setState({ tables: getData().tables });
useStageStore.setState({ stage: getData().stage, inUse: false });
useMoneyStore.setState({ money: getData().money });
useBarStore.setState({ reputation: getData().reputation });