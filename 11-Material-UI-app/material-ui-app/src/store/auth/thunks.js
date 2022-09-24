import { registerUserWithEmailPassword, signInWithGoogle, loginUserWithEmailPassword, logoutFirebase} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
    return async (dispatch, getState) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        delete result.ok;
        dispatch(login(result));
        localStorage.setItem('user', JSON.stringify(result));
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await registerUserWithEmailPassword({email, password, displayName});

        if (!result.ok) return dispatch(logout(result.errorMessage));
        
        delete result.ok;
        dispatch(login(result));
        localStorage.setItem('user', JSON.stringify(result));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginUserWithEmailPassword({email, password});

        if (!result.ok) return dispatch(logout(result.errorMessage));
        
        delete result.ok;
        dispatch(login(result));
        localStorage.setItem('user', JSON.stringify(result));
    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( logout() );

    }
}