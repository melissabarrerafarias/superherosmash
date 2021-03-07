import React, { useState } from 'react'; 
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';//function to save token to localStorage 

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
        <main> 
            <div> 
                <div> 
                    <h2>Login</h2>
                    <div>
                        <form onSubmit={onSubmit}>
                            <input
                            placeholder='email'
                            name='email'
                            type='email'
                            id='email'
                            value={formState.email}
                            onChange={onChange}
                            />
                            <input 
                            placeholder='password'
                            name='password'
                            type='password'
                            id='password'
                            value={formState.password}
                            onChange={onChange}
                            />
                            <button> 
                                Enter
                            </button>
                        </form>
                        {error && <div>Something went wrong...</div>}
                    </div>
                </div>
            </div>
        </main>
    )
}; 

export default Login; 
