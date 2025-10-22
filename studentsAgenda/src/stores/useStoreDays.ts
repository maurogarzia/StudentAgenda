import { create } from "zustand";

interface IUseStoreDays{
    days: string[]
} 

export const useStoreDays = create<IUseStoreDays>((set) => ({
    days: ['Lunes', 'Martes', 'Miercoles', 'Jueves']
}))