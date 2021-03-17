import React from 'react'; 
import '../Modal/modal.css';

function Modal({handler}) {

    return (
        <div className="modal" >
          <p>I'm a modal</p>
            <button className="close" type="button" onClick={() => handler(false)}>X</button>
        </div>
      )
  }

export default Modal; 