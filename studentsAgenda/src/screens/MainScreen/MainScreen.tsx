import { AddStudent } from '../../components/AddStudent/Addstudent'
import { Agenda } from '../../components/Agenda/Agenda'
import { useStoreModal } from '../../stores/useStoreModal'
import style from './MainScreen.module.css'

export const MainScreen = () => {

    const {setView, view} = useStoreModal()

    return (
        <div className={style.containerPrincipal}>
            <div className={style.header}>
                <h1>Agenda de Estudiantes</h1>
            </div>
            <button onClick={() =>setView(true)}>Agregar estudiante</button>
            {view && 
                <div className={style.modalBackdrop}>
                    <AddStudent/>
                </div>
            }
            <Agenda/>
        </div>
    )
}