import React from 'react';
import '../Modal/modal.css';

function Modal({ handler }) {

    return (
        <div className="modal" >
            <button className="close" type="button" onClick={() => handler(false)}><i class="far fa-window-close"></i></button>
            <div className="modal-creators">
            <h1 className="meet-us">Meet the creators<p><i class="fab fa-github"></i></p></h1>
           
                <a href='https://github.com/KJWesthoff' className="modal-creator">Karl-Johan Westhoff</a>
                <a href='https://github.com/treguv' className="modal-creator">Vladislav Tregubov</a>
                <a href='https://github.com/AnjinIsmail' className="modal-creator">Anji Ismail</a>
                <a href='https://github.com/barron-a' className="modal-creator">Adam Barron</a>
                <a href="https://github.com/melissabarrerafarias" className="modal-creator">Melissa Barrera</a>
            </div>
        </div>
    )
}

export default Modal;