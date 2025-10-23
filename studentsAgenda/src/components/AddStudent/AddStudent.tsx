import React, { useState } from 'react'
import { useStoreModal } from '../../stores/useStoreModal'
import { useStoreStudents } from '../../stores/useStoreStudents'
import style from './AddStudent.module.css'
import type { IStudents } from '../../types/IStudents'


export const AddStudent = () => {

    const {activeStudent, addStudent, editStudent} = useStoreStudents()
    const {setView} = useStoreModal()

    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']

    const [newStudent, setNewStudent] = useState<IStudents>({
        id: activeStudent?.id || crypto.randomUUID(),
        name: activeStudent?.name || '',
        course: activeStudent?.course || '',
        days : activeStudent?.days || []

    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target
        setNewStudent((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    // Cuando se marca o se desmarca un dia
    const handleCheckbox = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = e.target

        setNewStudent(prev => {
            if (checked) {
                return {
                    ...prev,
                    days: [...prev.days, {days: value, schedule: ""}]
                }
            } else {
                // Si se desmarca lo quitamos
                return {
                    ...prev,
                    days: prev.days.filter(d => d.days !== value)
                }
            }
        })
    }

    // Cuando se cambia el horaio
    const handleChangeShedule = (day: string, value: string) => {
        setNewStudent(prev => ({
            ...prev,
            days: prev.days.map(d => 
                d.days === day ? {...d, schedule: value} : d
            )
        }))
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (newStudent.course === ''){
            alert("Debe elegir un curso")
            return
        } 

        try {
            if (activeStudent) {
                editStudent(newStudent, newStudent.id)
                alert('Se editó el estudiante')
                setView(false) // Cierro el modal
            } else {

                addStudent(newStudent)
                alert('Se creó el estudiante')
                setView(false) // Cierro el modal
            }
        } catch (error : any) {
            console.log(error.mesage);
            alert('No se pudo completar la accion')
        }

    }


    return (
        <div className={style.containerPrincipal}>
            <h1>{activeStudent ? 'Editar estudiante' : 'Agregar estudiante'}</h1>

            <form onSubmit={handleSubmit} className={style.containerData}>
                
                <label htmlFor="">Nombre</label>
                <input type="text" placeholder='Nombre' name="name" value={newStudent.name} onChange={handleChange}/>
                
                <label htmlFor="">Curso</label>
                <select name="course" id="" value={newStudent.course} onChange={handleChange}>
                    <option value="">Sin selección</option>
                    <option value="1">1°</option>
                    <option value="2">2°</option>
                    <option value="3">3°</option>
                    <option value="4">4</option>
                    <option value="5">5°</option>
                    <option value="6">6°</option>
                    <option value="7">7°</option>
                </select>


                <label htmlFor="">Dias</label>
                <div className={style.days}>
                    {days.map((d) => (
                        <div className={style.containerShedule}>
                            <div className={style.containerDay}>
                                <label htmlFor="">{d}</label>
                                <input type="checkbox" 
                                name="days.days" 
                                value={d} 
                                checked={newStudent.days.some(day => day.days === d)}
                                onChange={handleCheckbox}/>
                            </div>


                            <div className={style.shedule}>
                                {/* Si el dia esta seleccionado muestro el input */}
                                {newStudent.days.some(day => day.days === d) ?(
                                    <input 
                                        type="text" 
                                        placeholder='Horario'
                                        name="days.schedule" 
                                        value={newStudent.days.find(f => f.days === d)?.schedule || ''}
                                        onChange={e => handleChangeShedule(d, e.target.value)}/>
                                ) : <div className={style.emptyDay}></div>}
                            </div>
                        </div>
                    ))}
                </div>
                

                <div className={style.containerButtons}>
                    <button onClick={() => setView(false)}>Cancelar</button>
                    <button type='submit'>Aceptar</button>
                </div>
            </form>
            
        </div>
    )
}