import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle, setError} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const handleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
    }
    return (
        <div className='text-center'>
            <h1>Please Login</h1>
            <button onClick={handleLogin} className='btn btn-warning'>Login with google</button>
        </div>
    );
};

export default Login;