import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { FirebaseAuth } from '../firebase/config';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from '../ui';
import { login, logout } from '../store/auth/authSlice';
import { useCheckAuth } from '../hooks/useCheckAuth';

export const AppRouter = () => {

    const status = useCheckAuth();
    
    if( status === 'checking'){
        return <CheckingAuth/>
    }

    return (
        <Routes>
            {
                status === 'authenticated'
                /* Journal app */
                ? <Route path="/*" element={ <JournalRoutes/> } />
                /* Login & registry */
                : <Route path="/auth/*" element={ <AuthRoutes/> } />
            }
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        </Routes>
    )
}