import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {HomePage} from './pages/homePage';

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}