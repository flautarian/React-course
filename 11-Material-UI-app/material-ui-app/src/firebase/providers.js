import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { authSlice, login } from "../store/auth/authSlice";
import { FirebaseApp, FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            // user Info
            displayName, email, photoURL, uid
        }
    }
    catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid } = result.user;
        // on register we update display name in firebase
        await updateProfile(FirebaseAuth.currentUser, {displayName: displayName} );
        // we return succesful login
        return ({
            ok: true,
            uid, photoURL, email, displayName
        });
    }
    catch (e) {
        const errorMessage = e.message;
        //console.log(errorMessage);
        return {
            ok: false,
            errorMessage
        }
    }
}

export const loginUserWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid, displayName } = result.user;
        // on register we update display name in firebase
        // we return succesful login
        return ({
            ok: true,
            uid, photoURL, email, displayName
        });
    }
    catch (e) {
        const errorMessage = e.message;
        //console.log(errorMessage);
        return {
            ok: false,
            errorMessage
        }
    }
}

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}