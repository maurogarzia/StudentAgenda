
import { Header } from '../../components/Header/Header'
import type { IStudents } from '../../types/IStudents'
import style from './SelectedStudentScreen.module.css'
import { useStoreStudents } from '../../stores/useStoreStudents'
import { useStoreModal } from '../../stores/useStoreModal'
import { AddStudent } from '../../components/AddStudent/AddStudent'


export const SelectedStudentScreen = () => {

    const {selectedStudent, setActiveStudents, deleteStudent} = useStoreStudents()
    const {setView, view} = useStoreModal()

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
            <Header/>
            <h1 className={style.title}>Estudiante Seleccionado</h1>
            <div key={selectedStudent?.id} className={style.containerStudent}>
                    <h2>{selectedStudent?.name}</h2>
                    <p>{selectedStudent?.course} Grado</p>
                    <div>
                        <p>Horarios</p>
                        <div className={style.shedule}>
                            {selectedStudent?.days.map((d) => (
                                <div className={style.unitSchedule}>
                                    <p>{d.days}</p>
                                    <p>{d.schedule}</p>
                                </div>
                                
                            ))}
                        </div>
                        <div className={style.containerButton}>
                            <button className={style.delete} onClick={() => handleDelete(selectedStudent!.id)}>
                                <span className="material-symbols-outlined">delete</span>
                            </button>
                            <button className={style.edit} onClick={() => handleEdit(selectedStudent!)}>
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            {view && <div className={style.modalBackdrop}><AddStudent/></div>}
        </div>  
    )
}