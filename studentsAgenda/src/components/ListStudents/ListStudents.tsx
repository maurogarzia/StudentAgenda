import { useStoreStudents } from '../../stores/useStoreStudents'
import style from './ListStudents.module.css'

export const ListStudents = () => {

    const {students, deleteStudent} = useStoreStudents()

    
    

    return(
        <div className={style.containerPrincipal}>
            {students.map((student) => (
                <div key={student.id} className={style.containerStudent}>
                    <h2>{student.name}</h2>
                    <p>{student.course}</p>
                    <div>
                        <p>Horarios</p>
                        {student.days.map((d) => (
                            <div className={style.shedule}>
                                <p>{d.days}</p>
                                <p>{d.schedule}</p>
                                <button onClick={() => deleteStudent(student.id)}>eliminar</button>
                            </div>
                            
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}