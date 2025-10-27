import { Route, Routes } from "react-router-dom"
import { StudentsScreen } from "../screens/StudentsScreen/StudentsScreen"
import { MainScreen } from "../screens/MainScreen/MainScreen"
import { SelectedStudentScreen } from "../screens/SelectedStudentScreen/SelectedStudentScreen"


export const MainRoutes = () => {


    return (
        <>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="/students" element= {<StudentsScreen/>}/>
                <Route path="/selectedStudent" element={<SelectedStudentScreen/>}/>
            </Routes>
        
        </>
    )
}