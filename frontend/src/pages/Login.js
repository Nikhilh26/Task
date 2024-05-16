import { useState } from 'react';
import './../styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleOnClickSubmit = async (e) => {
        e.preventDefault();

        console.log(password);
        console.log(email);

        const resp = await fetch('https://task-tnit.onrender.com/api/login', {
            body: JSON.stringify({
                email: email,
                password: password
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const body = await resp.json();
        console.log(body);
        if (body.success) {
            localStorage.setItem('token', body.token);
            navigate('/')
        }

        alert(body.message);

        if (body.redirect) {
            navigate('/signup');
        }
    }

    return (
        <>
            <div className='Login' title='Home' onClick={(e) => { e.preventDefault(); navigate('/') }} >
                Go Back
            </div>
            <div className='container-login'>

                <h1 className='description-login'>
                    Please Login to Manage and Track your task
                </h1>

                <form className='form-component-login'>

                    <label htmlFor='email'>
                        <h2>
                            Email:
                        </h2>
                    </label>

                    <input id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <label htmlFor='password'>
                        <h2>
                            Password:
                        </h2>
                    </label>
                    <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <div className='btn' onClick={handleOnClickSubmit}>
                        <button style={{ 'padding': '5px 40px', backgroundColor: 'rgb(79, 107, 220)', width: '80%', 'fontWeight': 'bolder' }}>Submit</button>
                    </div>

                    <div style={{ 'marginTop': '3vh' }}>
                        (If you have not registered before you can login over <Link to='/signup'>here</Link>)
                    </div>
                </form>
            </div>
        </>
    )
}