import { useState } from 'react'
import { useStoreModal } from '../../stores/useStoreModal'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const {setView} = useStoreModal()
    const [menu, setMenu] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleClick = (option: string) => {
        navigate(option)
    }

    return (
        <div className={style.containerPrincipal}>
            <h1 className={style.title} onClick={() => handleClick('/')}>Agenda Estudiante</h1>

            <div className={style.options}>
                <p onClick={() => handleClick('/students')}>Estudiantes</p>
                <p onClick={() => setView(true)}>Agregar un estudiante</p>
            </div>

            <div className={style.containerSearch}>
                <input type="text" name="" id="" placeholder='Buscar...'/>
                <span className="material-symbols-outlined">search</span>
            </div>

            <div className={style.menu}>
                <span onClick={() => setMenu(true)} className="material-symbols-outlined">menu</span>
            </div>

            {/* Menu responsivo */}
            {menu && (
                <div className={style.menuResponsive}>
                    <div className={style.optionsResponsive}>
                        <div className={style.search}>
                            <input type="text" name="" id="" placeholder='Buscar...'/>
                        </div>
                        
                        <p onClick={() => handleClick('/students')}>Estudiantes</p>
                        <p onClick={() => setView(true)}>Agregar Estudiante</p>
                        
                        <button onClick={() => setMenu(false)}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    )
}