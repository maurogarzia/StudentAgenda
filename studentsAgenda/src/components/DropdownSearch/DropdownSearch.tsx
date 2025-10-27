import type { FC } from 'react'
import type { IStudents } from '../../types/IStudents'
import style from './DropdownSearch.module.css'
import { useNavigate } from 'react-router-dom'
import { useStoreStudents } from '../../stores/useStoreStudents'


interface IDropdownSearch {
    listFilter : IStudents[]
}

export const DropdownSearch: FC<IDropdownSearch> = ({listFilter}) => {

    const navigate = useNavigate()

    const {setSelectedStudent} = useStoreStudents()

    const handleClick = (student: IStudents) => {
        navigate('/selectedStudent')
        setSelectedStudent(student)
    }

    return (
        <div className={style.containerPrincipal}>
            {listFilter.length > 0 ? (
                <div>
                    {listFilter.map(f => (
                        <div onClick={() => handleClick(f)} className={style.dropdown}>{f.name} - {f.course}</div>
                    ))}
                </div>)

                : (<p>No hay coincidencias</p>)
            }
        </div>  
    )
}