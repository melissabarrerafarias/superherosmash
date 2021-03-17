import React from 'react';
import QuantumRealm from '../img/quantumrealm.jpg';
import "../../src/NotFound.css";

const NotFound = () => {
    return (
        <body className="quantum-realm">
            <div className="not-found">
                <h1 className="error-heading">404</h1>
                <h2 className="error-heading">Page Not Found</h2>
                <p className="leave-warning">Time works differently in the Quantum Realm. You really don't want to be here...</p>
                <a href='/' className="exit">Exit Quantum Realm</a>
            </div>
        </body>
    );
};

export default NotFound;
