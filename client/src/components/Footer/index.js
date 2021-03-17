import React from 'react';
import '../Footer/footer.css';


const Footer = () => {

    const showCreators = () => {
        console.log('hey the modal should be showing up now')
    }
    return (
        <div class="footer">
            <div className="creators">
                <a href='https://github.com/KJWesthoff' className="creator">Karl-Johan Westhoff</a>
                <a href='https://github.com/treguv' className="creator">Vladislav Tregubov</a>
                <a href='https://github.com/AnjinIsmail' className="creator">Anji Ismail</a>
                <a href='https://github.com/barron-a' className="creator">Adam Barron</a>
                <a href="https://github.com/melissabarrerafarias" className="creator">Melissa Barrera</a>
            </div>
            <p className="mobile-github" onClick={showCreators}><i class="fab fa-github"></i></p>
        </div>
    );
};

export default Footer;