import { useStoreStudents } from '../../stores/useStoreStudents'
import style from './Agenda.module.css'

export const Agenda = () => {

    const {students} = useStoreStudents() 
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

    return (
        <div className={style.containerPrincipal}>
            {days.map((d) => (
                <table>
                    <thead>
                        <th>{d}</th>
                    </thead>
                    <tbody>
                        {students.map((s) => (
                            s.days.map((day) => day.days === d)
                        ))}
                    </tbody>
                </table>
            ))}
        </div>
    )
}