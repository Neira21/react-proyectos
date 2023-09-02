import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './TwitterCard.css';



const Element = ({nombreusuario, nombrearroba, foto1}) => {
    const [siguiendo, setSiguiendo] = useState(false)

    const handleSeguir = () => {
        setSiguiendo(!siguiendo)
    }

    return (
        <div className="card-element">
                <img src={foto1} width={40} className="rounded-circle" />
                <div className="card-name">
                    <h5 className="card-title">{nombreusuario}</h5>
                    <div className="d-flex">
                        <h6 className="card-subtitle mb-2">{nombrearroba}</h6>
                        {siguiendo ? <span className="px-2">siguiendo</span> : <span className="px-2">seguir</span>} 
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSeguir}>
                    {siguiendo ? "Siguiendo" : "Seguir"}
                </button>
        </div>
    )
}

export default Element