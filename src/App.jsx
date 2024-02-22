
import React, {useEffect, useState} from 'react';
import api from "./services/api";
import Card from "./components/Card";
import Table from './components/Table';

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
  
    // let info = personagem.map(char => <Card  key = {char.id} nome ={char.name} profissao={char.job}/>)
    return (
        <>
            <div className='container-fluid'>
                <div className="center" >
                    <Table data={personagem}/>
                 {/* {info} */}
                </div>
            </div>
          
        </>
    )
}


