import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../reducer/actions';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.error);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser(username, password));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;