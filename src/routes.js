import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';
import {UseStatePage} from './pages/useStatePage';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/useState' element={<UseStatePage />}/>
            </Routes>
        </BrowserRouter>
    )
}