import { useStoreModal } from '../../stores/useStoreModal'
import { useStoreStudents } from '../../stores/useStoreStudents'
import style from './AddStudent.module.css'


export const AddStudent = () => {

    const {activeStudent} = useStoreStudents()
    const {setView} = useStoreModal()

    return (
        <div className={style.containerPrincipal}>
            <h1>{activeStudent ? 'Editar estudiante' : 'Agregar estudiante'}</h1>

            <form action="" className={style.containerData}>
                
                <label htmlFor="">Nombre</label>
                <input type="text" name="" id="" />
                
                <label htmlFor="">Curso</label>
                <select name="" id="">
                    <option value="">Sin selección</option>
                    <option value="1">1°</option>
                    <option value="1">2°</option>
                    <option value="2">3°</option>
                    <option value="4">4</option>
                    <option value="5">5°</option>
                    <option value="6">6°</option>
                    <option value="7">7°</option>
                </select>


                <label htmlFor="">Dias</label>
                <input type="text" />

                <div className={style.containerButtons}>
                    <button onClick={() => setView(false)}>Cancelar</button>
                    <button>Aceptar</button>
                </div>
            </form>
            
        </div>
    )
}