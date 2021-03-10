import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';//function to logout 

const NavBar = () => {
    const logout = e => {
        e.preventDefault();
        Auth.logout();
    };

    return (
        <header style={{ backgroundColor: 'red' }}>
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
                            <Link to='/discussionboard'>Discussion Board</Link>
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