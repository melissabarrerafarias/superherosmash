import React, { useState } from 'react'; 
import { useMutation } from '@apollo/react-hooks'; 
import { ADD_USER } from '../utils/mutations';//mutation for adding a new user
import Auth from '../utils/auth';//function to set token to localStorage

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: ''}); 
    const [addUser, { error }] = useMutation(ADD_USER);

    const onChange = (e) => {
        const { name, value } = e.target; 
        setFormState({
            ...formState, 
            [name]: value,
        })
    }; 
    const onSubmit = async (e) => {
        e.preventDefault(); 
        try {
            const { data } = await addUser({ variables: { ...formState }}); 
            console.log(data)
            Auth.login(data.addUser.token);
        }
        catch(e) {
            console.log(e)
        }
    }; 

    return (
        <main> 
            <div> 
                <div> 
                    <h2>Sign Up</h2>
                    <div>
                        <form onSubmit={onSubmit}> 
                            <input
                            placeholder='username'
                            name='username'
                            type='username'
                            id='username'
                            value={formState.username}
                            onChange={onChange}
                            /> 
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

export default Signup; 