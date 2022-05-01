import { signOut } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init'

const useFirebase = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Handle signin with google
    const handleSingninWithGoogle = () => {
        signInWithGoogle()
    }

    // Handle Logout
    const handleLogout = () => {
        signOut(auth);
    }

    if(user){
        navigate('/')
    }

    return {
        handleSingninWithGoogle,
        handleLogout,
        error,
    }
}

export default useFirebase;