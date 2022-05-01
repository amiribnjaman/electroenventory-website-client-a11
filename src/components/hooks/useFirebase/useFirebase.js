import { signOut } from 'firebase/auth';
import { useState } from 'react';
import {
    useSignInWithGoogle,
    useCreateUserWithEmailAndPassword,
    useUpdateProfile
} from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init'

const useFirebase = () => {
    let customErr = '';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        signUpUser,
        signUpEoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);
    const [signUpBtnAction, setSignUpBtnAction] = useState(false)

    const [signupUserInfo, setSignupUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    // Handle signin with google
    const handleSingninWithGoogle = () => {
        signInWithGoogle()
    }

    // Handle Logout
    const handleLogout = () => {
        signOut(auth);
    }

    console.log(customErr);
    return {
        handleSingninWithGoogle,
        handleLogout,
        error,
        customErr,
        signUpBtnAction
    }
}

export default useFirebase;