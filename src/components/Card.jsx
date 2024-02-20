import { useState } from 'react';
import React from 'react';
import "../assets/bootstrap/css/bootstrap.min.css";
export default function cards(){

const [id, nome, idade, bandeira, profissao, recompensa] = useState(); 
    return(
        <>
            <div className="card" style={{width: '18rem;'}}>

            <div className="card-body">
                <input type="hidden">{id}</input>
                <h5 className="card-title">{nome}</h5>
                <h6 className="card-title">{profissao}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{nome}</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            </div>
        </>
    )
}

