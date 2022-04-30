import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
import auth from '../../../firebase.init'

const useFirebase = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Handle signin with google
    const handleSingninWithGoogle = () => {
        console.log('clicked');
        signInWithGoogle()
    }

    return { handleSingninWithGoogle }
}

export default useFirebase;