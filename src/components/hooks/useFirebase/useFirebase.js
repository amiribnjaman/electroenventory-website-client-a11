import { signOut } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init'

const useFirebase = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Handle signin with google
    const handleSingninWithGoogle = () => {
        signInWithGoogle()
    }

    // Handle Logout
    const handleLogout = () => {
        signOut(auth);
    }

    return {
        handleSingninWithGoogle,
        handleLogout,
        error,
    }
}

export default useFirebase;