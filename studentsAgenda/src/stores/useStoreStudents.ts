import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IStudents } from "../types/IStudents";

interface IUseStoreStudents {
    students : IStudents[],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    addStudent : (newStudent : IStudents) => void  
}

export const useStoreStudents = create<IUseStoreStudents>()(
    persist(
        (set) => ({
            students: [],
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            

            addStudent: (newStudent) => set((state) => ({
                students: [...state.students, newStudent]
            }))
        }),
        {
            name : '',
            partialize: (state) => ({}),
        }
    )
)