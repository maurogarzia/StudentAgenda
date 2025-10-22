import { Agenda } from '../../components/Agenda/Agenda'
import style from './MainScreen.module.css'

export const MainScreen = () => {
    return (
        <div className={style.containerPrincipal}>
            <div className={style.header}>
                <h1>Agenda de Estudiantes</h1>
            </div>
            <Agenda/>
        </div>
    )
}