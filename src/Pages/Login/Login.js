import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

// Login component
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
        <div className='login-page'>
            <h1>Please Login</h1>
            <button onClick={handleLogin} className='btn-google-login'>Login with google</button>
        </div>
    );
};

export default Login;