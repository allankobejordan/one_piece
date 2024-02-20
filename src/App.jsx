
import React, {useEffect, useState} from 'react';
import './assets/css/App.css';
import api from "./services/api";
import Card from "./components/Card";


//componentes
export default function App(){
    const [personagem, setPersonagem] = useState([]);
    

    useEffect(()=>{
        api.get("/characters/en")
        .then((response)=> setPersonagem(response.data))
        .catch((err)=>{
            console.error("erro fatal" + err);
        });
    }, [])

    console.log(personagem)
    
    let info = personagem.slice(0, 3).map(char => <Card  key = {char.id} nome ={char.name} profissao={char.job}/>)
    return (
        <>
            <div className='container-fluid'>
                <div className="d-flex justify-content-center align-items-center" >
                 {info}
                </div>
            </div>
          
        </>
    )
}


