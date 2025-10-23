import { useStoreModal } from '../../stores/useStoreModal'
import { useStoreStudents } from '../../stores/useStoreStudents'
import type { IStudents } from '../../types/IStudents'
import style from './ListStudents.module.css'

export const ListStudents = () => {

    const {students, deleteStudent, setActiveStudents} = useStoreStudents()
    const {setView} = useStoreModal()


    const handleEdit = (id : IStudents) => {
        setActiveStudents(id)
        setView(true)
    }

    const handleDelete = (id: string) => {
        deleteStudent(id)
        alert('Se eliminó el estudiante')
    }

    return(
        <div className={style.containerPrincipal}>
            {students.map((student) => (
                <div key={student.id} className={style.containerStudent}>
                    <h2>{student.name}</h2>
                    <p>{student.course} Grado</p>
                    <div>
                        <p>Horarios</p>
                        <div className={style.shedule}>
                            {student.days.map((d) => (
                                <div className={style.unitSchedule}>
                                    <p>{d.days}</p>
                                    <p>{d.schedule}</p>
                                </div>
                                
                            ))}
                        </div>
                        <div className={style.containerButton}>
                            <button className={style.delete} onClick={() => handleDelete(student.id)}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                            <button className={style.edit} onClick={() => handleEdit(student)}>
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}