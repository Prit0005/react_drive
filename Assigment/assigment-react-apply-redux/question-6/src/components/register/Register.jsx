import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../reducer/actions';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error1 = useSelector(state => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) {
            dispatch(registerUser(username, password));
        } else {
            alert('Both username and password are required');
        }
    };

    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                {error1 && <p className="error">{error1}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;