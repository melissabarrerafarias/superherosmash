import React, { useState } from 'react'; 
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';//function to save token to localStorage 
import backgroundImage from "../../src/img/4-2.jpg";


const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' }); 
    const [login, { error }] = useMutation(LOGIN);

    const onChange = (e) => {
        const { name, value } = e.target; 
        setFormState({
            ...formState, 
            [name]: value,
        }); 
    }; 

    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const { data } = await login({ variables: { ...formState }}); 
            setFormState({ email: '', password: '' });
            console.log(data); 
            Auth.login(data.login.token);
        }
        catch (e) {
            console.log(e)
        }
    }; 

    return (
        <body className="img" style={{backgroundImage: `url(${backgroundImage})` }}>  
            <div>
                <div className="login-box"> 
                    <h2>Login</h2>
                    <div>
                        <form onSubmit={onSubmit}>
                           <div className ="user-box">
                            <input
                            placeholder='email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={onChange}
                            />
                            </div>
                            <div className ="user-box">
                            <input 
                            placeholder='password'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={onChange}
                            />
                            </div>
                            <button> 
                                Enter
                            </button>
                        </form>
                        {error && <div><h2>Login failed. Please make sure you have the correct information</h2></div>}
                    </div>
                
                </div>
            </div>
        </body>
    )
}; 

export default Login; 
