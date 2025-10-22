import { create } from "zustand";

interface IUseStoreModal{
    view : boolean,
    setView : (option: boolean) => void
}

export const useStoreModal = create<IUseStoreModal>((set) => ({
    view: false,
    setView: (option) => set({view : option})
}))