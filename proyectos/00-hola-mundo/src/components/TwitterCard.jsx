import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from '../assets/foto1.jpg';
import Element from "./Element";

const TwitterCard = () => {
    return (
        <div className="card container">
            <div className="card-title-principal">
                <h5>¿A quien seguir?</h5>
            </div>
            <Element 
                nombreusuario={"Nombre de usuario"}
                nombrearroba={"@Nombreusuario"}
                foto1={foto1}
                >
            </Element>
            <Element 
                nombreusuario={"Nombre de usuario"}
                nombrearroba={"@Nombreusuario"}
                foto1={foto1}
                >
            </Element>
            <Element 
                nombreusuario={"Nombre de usuario"}
                nombrearroba={"@Nombreusuario"}
                foto1={foto1}
                >
            </Element>

        </div>
    );
}
export default TwitterCard;