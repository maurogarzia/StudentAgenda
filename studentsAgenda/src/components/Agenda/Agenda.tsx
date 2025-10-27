import { useStoreStudents } from '../../stores/useStoreStudents'
import { StudentCard } from '../StudentCard/StudentCard'
import style from './Agenda.module.css'

export const Agenda = () => {

    const {students} = useStoreStudents() 
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

    return (
        <div className={style.containerPrincipal}>
            {days.map((day) => (
                <div className={style.column}>
                    <div className={style.day}>
                        {day}
                    </div>
                    <div className={style.containerCards}>
                        {students.filter(student => student.days.some(d => d.days === day))
                            .map(student => (
                                <StudentCard 
                                    student={student}
                                    name={student.name}
                                    course={student.course}
                                    schedule={student.days.find(d => d.days === day)?.schedule || ''}/>
                            ))
                        
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}