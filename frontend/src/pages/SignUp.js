import './../styles/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleOnClickSubmit = async (e) => {
        e.preventDefault();

        console.log(password);
        console.log(email);

        const resp = await fetch('https://task-tnit.onrender.com/api/register', {
            body: JSON.stringify({
                email,
                password,
                name
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
            navigate('/login');
        }
    }

    return (
        <>
            <div className='Login' title='Home' onClick={(e) => { e.preventDefault(); navigate('/') }} >
                Go Back
            </div>
            <div className='container-signup'>
                <h1 className='description'>
                    Please signup to Manage and Track your task
                </h1>

                <form className='form-component'>

                    <label htmlFor='email'>
                        <h2>
                            Email:
                        </h2>
                    </label>

                    <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <label htmlFor='name'>
                        <h2>
                            Name:
                        </h2>
                    </label>

                    <input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

                    <label htmlFor='password'>
                        <h2>
                            Password:
                        </h2>
                    </label>

                    <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <div className='btn'>
                        <button style={{ 'padding': '5px 40px', backgroundColor: 'rgb(174, 32, 174)', width: '80%' }} onClick={handleOnClickSubmit} >Submit</button>
                    </div>

                    <div style={{ 'marginTop': '3vh' }}>
                        (If you have registered before you can login over <Link to='/login'>here</Link>)
                    </div>
                </form>
            </div>
        </>
    )
}