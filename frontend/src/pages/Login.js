import './../styles/Login.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className='container-signup'>
            <h1 className='description'>
                Please Login to Manage and Track your task
            </h1>

            <form className='form-component'>

                <label htmlFor='email'>
                    <h2>
                        Email:
                    </h2>
                </label>

                <input id='name' type="text"></input>

                <label htmlFor='password'>
                    <h2>
                        Password:
                    </h2>
                </label>
                <input id='password' type="password"></input>

                <div className='btn'>
                    <button style={{ 'padding': '5px 40px', backgroundColor: 'rgb(79, 107, 220)', width: '80%', 'fontWeight': 'bolder' }}>Submit</button>
                </div>

                <div style={{ 'marginTop': '3vh' }}>
                    (If you have not registered before you can login over <Link to='/signup'>here</Link>)
                </div>
            </form>
        </div>
    )
}