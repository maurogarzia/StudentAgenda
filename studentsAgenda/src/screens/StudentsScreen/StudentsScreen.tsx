import { AddStudent } from '../../components/AddStudent/AddStudent'
import { Header } from '../../components/Header/Header'
import { ListStudents } from '../../components/ListStudents/ListStudents'
import { useStoreModal } from '../../stores/useStoreModal'
import style from './StudentsScreen.module.css'

export const StudentsScreen = () => {

    const {view} = useStoreModal()

    return (
        <div className={style.containerPrincipal}>
            <Header/>
            <h1 className={style.title}>Estudiantes</h1>
            <ListStudents/>
            {view && 
                <div className={style.modalBackdrop}>
                    <AddStudent/>
                </div>
            }
        </div>
    )
}