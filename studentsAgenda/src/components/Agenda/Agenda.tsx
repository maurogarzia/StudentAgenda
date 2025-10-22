import style from './Agenda.module.css'

export const Agenda = () => {
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

                </tbody>
            </table>
        </div>
    )
}