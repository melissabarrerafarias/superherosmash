import React, { useState } from 'react';
import Modal from '../Modal';
import '../Footer/footer.css';


const Footer = () => {

    return (
        <div class="footer">
            <div className="creators">

                <a href='https://github.com/KJWesthoff' className="creator">Karl-Johan Westhoff</a>
                <a href='https://github.com/treguv' className="creator">Vladislav Tregubov</a>
                <a href='https://github.com/AnjinIsmail' className="creator">Anji Ismail</a>
                <a href='https://github.com/barron-a' className="creator">Adam Barron</a>
                <a href="https://github.com/melissabarrerafarias" className="creator">Melissa Barrera</a>
            </div>
            {/* <button onClick={showCreators}><i className="fab fa-github"></i></button>
            <Modal value={modal} /> */}

        </div>
    );
};

export default Footer;