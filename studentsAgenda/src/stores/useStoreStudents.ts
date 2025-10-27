import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IStudents } from "../types/IStudents";

interface IUseStoreStudents {
    students : IStudents[],
    activeStudent: IStudents | null
    selectedStudent: IStudents | null

    setActiveStudents: (student: IStudents | null) => void
    addStudent : (newStudent : IStudents) => void  
    editStudent : (newStudent : IStudents, id: string) => void  
    deleteStudent : ( id: string) => void,
    setSelectedStudent: (student: IStudents | null) => void
    
}

export const useStoreStudents = create<IUseStoreStudents>()(
    persist(
        (set) => ({
            students: [],
            
            activeStudent: null,

            selectedStudent: null,


            setActiveStudents: (student) => set({activeStudent : student}),

            addStudent: (newStudent) => set((state) => ({
                students: [...state.students, newStudent]
            })),

            editStudent: (newStudent,id) => set((state) => ({
                students: state.students.map((s) => (
                    s.id === id ? newStudent : s
                ))
            })),

            deleteStudent : (id) => set((state) => ({
                students : state.students.filter((f) => (
                    f.id !== id
                ))
            })),

            setSelectedStudent: (student) => set({selectedStudent: student})

        }),
        {
            name : 'students-storage',
            partialize: (state) => ({students : state.students}),
        }
    )
)