import { signOut } from 'firebase/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init'

const useFirebase = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Handle signin with google
    const handleSingninWithGoogle = () => {
        signInWithGoogle()
    }

    // Handle Logout
    const handleLogout = () => {
        signOut(auth);
    }

    // If user logged in then he/she will be redirected
    let from = location.state?.from?.pathname || "/";
    if (user) {
        // send user email to server for jwt verification
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ email: user.user.email }),
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token)
                navigate(from, { replace: true });
            })
    }

    return {
        handleSingninWithGoogle,
        handleLogout,
        error,
    }
}

export default useFirebase;