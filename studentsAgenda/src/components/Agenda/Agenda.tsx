import { useStoreStudents } from '../../stores/useStoreStudents'
import style from './Agenda.module.css'

export const Agenda = () => {

    const {students} = useStoreStudents() 

    return (
        <div className={style.containerPrincipal}>
            <table>
                <thead>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miercoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr>{s.name}</tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}