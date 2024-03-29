/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import './style.css';
import { getObrasDestacadas } from '../../services/firebase';
import { Link } from "react-router-dom";

function ObrasDestacadas() {

    const [Datos, setDatos] = useState([]);

    async function leerDatos() {
      let respuesta = await getObrasDestacadas();
      setDatos(respuesta);
    }

    useEffect(() => {
      leerDatos();
    }, []);

    return(
        <div className='container_obras_destacadas'>
            <div className='obras__destacadas-title'>
                <h1>Obras Destacadas</h1>
            </div>
            <div className='obras__destacadas-content'>
                    {Datos.map((user) => (
                        <div className='obras__destacadas-content-img' key={user.id}>
                            <div className="obras-hover">
                            <Link to={`/obra/${user.category}`} className="obras-destacadas-cover">
                                <h2>{user.title}</h2>
                            </Link>
                            </div>
                                    <img src={user.img} alt={user.title} />
                        </div>
                        
                    ))}
            </div>
        </div>    
        )
}

export default ObrasDestacadas;