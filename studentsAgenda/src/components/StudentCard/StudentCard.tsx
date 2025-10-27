import type { FC } from 'react'
import style from './StudentCard.module.css'
import { useStoreStudents } from '../../stores/useStoreStudents'
import { useStoreModal } from '../../stores/useStoreModal'
import type { IStudents } from '../../types/IStudents'

interface IStudentCard {
    name: string,
    course: string
    schedule: string | null,
    student: IStudents
    
}

export const StudentCard:FC<IStudentCard> = ({name, course, schedule, student}) => {

    const {setActiveStudents} = useStoreStudents()
    const {setView} = useStoreModal()

    const handleEdit = (student: IStudents) =>{
        setActiveStudents(student)
        setView(true)
    }


    return (
        <div className={style.containerPrincipal}>
            <p className={style.name}>{name}</p>
            <p>{course}</p>
            
                <div className={style.data}>
                    <p>Horario</p>
                    {schedule}
                </div>

                <div className={style.containerButtons}>
                    <button onClick={() => handleEdit(student)} className={style.edit}>Editar</button>
                </div>
        
        </div>
    )
}