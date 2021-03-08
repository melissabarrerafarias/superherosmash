import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';//function to logout 
import {Menu} from 'semantic-ui-react';

const NavBar = () => {
    const logout = e => {
        e.preventDefault();
        Auth.logout();
    };

    return (
        <header className="header" >
            <div>
                <Link to='/'>
                    <h1>Superhero App</h1>
                </Link>
                <nav>
                    {Auth.isLoggedIn() ? ( //if user is logged in - render
                        <>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : ( //else - render 
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>


    
        );
};

export default NavBar;