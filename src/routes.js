import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';
import {UseStatePage} from './pages/useStatePage';
import {UseEffectPage} from './pages/useEffectPage';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/useState' element={<UseStatePage />}/>
                <Route path='/useEffect' element={<UseEffectPage />}/>
            </Routes>
        </BrowserRouter>
    )
}