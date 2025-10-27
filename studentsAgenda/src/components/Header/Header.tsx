import { useState } from 'react'
import { useStoreModal } from '../../stores/useStoreModal'
import style from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import { useStoreStudents } from '../../stores/useStoreStudents'
import { DropdownSearch } from '../DropdownSearch/DropdownSearch'


export const Header = () => {

    const {setView} = useStoreModal()
    const {setActiveStudents, students} = useStoreStudents()
    const [menu, setMenu] = useState<boolean>(false)
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleClick = (option: string) => {
        navigate(option)
    }

    const handleOpen = () => {
        setActiveStudents(null)
        setView(true)
    }

    // Barra de busqueda
    const filterSearch = students.filter(m => {
        const term = search.toLocaleLowerCase()
        return (
            m.course.toLocaleLowerCase().includes(term) ||
            m.name.toLocaleLowerCase().includes(term) ||
            m.days.map(d => d.days.toLocaleLowerCase()).includes(term) ||
            m.days.map(d => d.schedule.toLocaleLowerCase()).includes(term)
            
        )
    })

    return (
        <div className={style.containerPrincipal}>
            <h1 className={style.title} onClick={() => handleClick('/')}>Agenda Estudiante</h1>

            <div className={style.options}>
                <p onClick={() => handleClick('/students')}>Estudiantes</p>
                <p onClick={handleOpen}>Agregar un estudiante</p>
            </div>

            <div className={style.containerSearch}>
                <div className={style.inputAndDropdown}>
                    <input 
                        type="text" 
                        name="search" 
                        value={search} 
                        placeholder='Buscar...' 
                        onChange={(e) => setSearch(e.target.value)}/>
                    {search === '' 
                        ? null
                        : 
                        <DropdownSearch listFilter={filterSearch}/>
                        }
                </div>
                <span className="material-symbols-outlined">search</span>
            </div>

            <div className={style.menu}>
                <span onClick={() => setMenu(true)} className="material-symbols-outlined">menu</span>
            </div>

            {/* Menu responsivo */}
            {menu && (
                <div className={style.modalBackdrop}>
                    <div className={style.menuResponsive}>
                        <div className={style.optionsResponsive}>
                            <div className={style.search}>
                                <input 
                                    type="text"
                                    name="search" 
                                    value={search} 
                                    placeholder='Buscar...' 
                                    onChange={(e) => setSearch(e.target.value)}/>
                            </div>
                            {search === '' ? 
                                    null :
                                    <p>
                                        <DropdownSearch listFilter={filterSearch}/>
                                    </p>
                                    
                                }
                            <p onClick={() => handleClick('/students')}>Estudiantes</p>
                            <p onClick={handleOpen}>Agregar Estudiante</p>
                            
                            <button onClick={() => setMenu(false)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}