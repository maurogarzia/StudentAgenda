import { Route, Routes } from "react-router-dom"
import { StudentsScreen } from "../screens/StudentsScreen/StudentsScreen"
import { MainScreen } from "../screens/MainScreen/MainScreen"

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainScreen/>}/>
                <Route path="/students" element= {<StudentsScreen/>}/>
            </Routes>
        
        </>
    )
}