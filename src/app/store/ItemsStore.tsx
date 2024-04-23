import {create} from 'zustand'

type TableState = {
    tables: boolean[];
    addTable: () => void;
    setTable: (val: boolean[]) => void;
    addCostumer: (id: number) => void;
    removeCostumer: (id: number) => void;
  };

type StageState = {
  stage: boolean
  inUse: boolean
  addStage: () => void;
  setStage: (val: boolean) => void;
  useStage: () => void;
}



  // Função que cria o store Zustand
  export const useMesaStore = create<TableState>((set) => ({
    tables: getTablesSave(),
    addTable: () => set((state) => ({ tables: [...state.tables, false] })),
    setTable: (val: boolean[]) => set((state) => ({ tables: val })),
    addCostumer: (id: number) => set((state) => ({tables: [...state.tables.slice(0, id), true, ...state.tables.slice(id + 1)]})),
    removeCostumer: (id: number) => set((state) => ({tables: [...state.tables.slice(0, id), false, ...state.tables.slice(id + 1)]}))
  }));

  export const useStageStore = create<StageState>((set) => ({
    stage: getStageSave(),
    inUse: false,
    setStage: (val: boolean) => set((state) => ({stage: val})),
    addStage: () => set((state) => ({stage: true})),
    useStage: () => set((state) => ({inUse: true})),
  }));

  function getTablesSave(){
    const storage = localStorage.getItem("gameSave")
    if (storage != undefined) return JSON.parse(storage).tables
    return []
  }
  function getStageSave(){
    const storage = localStorage.getItem("gameSave")
    if (storage != undefined) return JSON.parse(storage).stage
    return null
  }