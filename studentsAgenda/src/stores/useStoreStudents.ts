import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IStudents } from "../types/IStudents";

interface IUseStoreStudents {
    students : IStudents[],
    activeStudent: IStudents | null
    setActiveStudents: (student: IStudents | null) => void
    addStudent : (newStudent : IStudents) => void  
}

export const useStoreStudents = create<IUseStoreStudents>()(
    persist(
        (set) => ({
            students: [],
            
            activeStudent: null,

            setActiveStudents: (student) => set({activeStudent : student}),

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